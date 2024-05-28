
import { notFound, redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Profile } from '@/lib/session';
import Loading from '@/app/components/Loading';
import { BsArrowLeft } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa6';
import ResultsSummary, { getCorrectAnswer } from '@/app/components/ResultSummary'
import Link from 'next/link';
import { getQuestions } from '@/app/quiz/[quizId]/page';

async function getResult(params)
{
  const result = await prisma.QuizResponse.findUnique(
    {
      where: {id: params.responseId}
    }
  )
  return result

}

const getResponses = async (responseId) =>
{
  //fetches all the quizzes created by this user
  const responses = await prisma.QuizResponseAnswers.findMany({
    where: {responseId: responseId}
  })
  return responses
}

const sessionUser = async () => {
  const check = await prisma.User.findUnique(
    {
      where: {username: await Profile()}
    }
  )
  return check;
}

const getQuiz = async(quizId) => {
  const quiz = await prisma.Quiz.findUnique(
    {
      where: {id: quizId}
    }
  )
  return quiz
}

const calculateResults = async (responses,question,numQuestions) =>{
  let correct = 0;
  for(var x = 0; x < numQuestions;x++){
    if(responses[x].answer == getCorrectAnswer(question[x].correctAnswer,question[x].answers[0]))
      {
        correct++;
      } 
  }
  return correct;
}


const  Results = async ({params}) => {
  
  const result = await getResult(params);
  let isLoggedIn = await Profile() != undefined?true:false;
  const isSessionUser = isLoggedIn && await sessionUser()
  const isResponder = isSessionUser.id == result.userId?true:false
  
  if(result == null)
    {
      notFound()
    }
    else if(!isLoggedIn || !isResponder){
      redirect("/login")
    }
    else{
      const responses = await getResponses(result.id)
      const quiz = await getQuiz(result.quizId)
      const question = await getQuestions(result.quizId)
      const finalResults = await calculateResults(responses,question,quiz.numQuestions)

      

  return (
      
    <div>
        <div className="navbar bg-base-100">
           <Link className="btn btn-ghost text-xl" href={`/${await Profile()}`}><FaArrowLeft/>
            Results for {quiz.topic}
            </Link>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-start w-full gap-10'>
          <section>
            <p>Your quiz Results:</p>
            <span className='flex text-2xl gap-2'>Correct answers: <h1 className='font-bold text-green-300'>{(finalResults/quiz.numQuestions)*100}%</h1>
            </span>
            
          </section>
        
            <div className='w-full lg:w-2/4 h-screen flex flex-col card bg-base-300 shadow-md p-5 '>
            <h1 className='text-2xl font-bold flex justify-between items-center pb-5'>Feedback <p className='font-light text-lg'>{finalResults}/{quiz.numQuestions}</p></h1>
              <div className='w-full h-full overflow-auto scroll-smooth'>
                
                {responses.map((response) =>{
                  
                  
                  return <ResultsSummary
                  key={Number(response.question)-1}
                question={question[Number(response.question)-1]}
                answers={question[response.question-1].answers}
                response={response}/>})}
              </div>
              
            </div>
            
        </div>
        

    </div>
  )
}
}

export default Results;
