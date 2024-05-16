'use client'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import CreateTopic from '../components/CreateTopic'
import PublishQuiz from '../components/PublishQuiz'
import CreateQuestions from '../components/CreateQuestions'

class questionData
    {
      id;
      text;
      answers;
    }

    class answers
    {
      a;
      b;
      c;
      d;
      constructor(a,b,c,d)
      {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
    }

const Create = () => {
    const isBrowser = () => typeof window !== 'undefined';
    const [question, setQuestion] = useState(0)
    const [questions, setQuestions] = useState([])//empty array of questionData objects
    const [quizData,setQuizData] = useState({
      topic: "",
      numQuestions: 0,
      timeLimit: 0,
      description: ""
    })

    function scrollToTop() 
    {
      //scrolls to the top after each submission of the form
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        const formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);

        const inputs = document.getElementsByClassName("inputs");
        for(let i = 0; i < inputs.length;i++)
        {
          //clears the inputs, might need to find a better way
          inputs[i].value = "";
        }

        
        if((question>0 && (question > Number(quizData.numQuestions))))
        {
            //last form submission
            publishQuiz();
        }
        else
        {
          if(question === 0)
          {
            //first form submission
              readQuizData(form_values);
          }
          else
          {
            //all the other form submissions between first and last submissions
            addQuestion(form_values);
          }
        }

        setQuestion(prevQuestion => 
          {
            //increments after every form submission
              return ++prevQuestion;
          })
          //scrolls to top after every submission
        scrollToTop()
    }

    
    function readQuizData(form_values)
    {
      //sets the quiz data after the first re-render
      setQuizData({...form_values})
    }


    function addQuestion(form_values)
    {
      //adds a question to the array held in the state for later usage or submission to api or database
      const newQuestion = new questionData();
      newQuestion.id = question-1;
      newQuestion.text = form_values.question;
      newQuestion.answers = new answers(form_values.a,form_values.b,form_values.c,form_values.d)
      //adding the question
      setQuestions(prevQuestions => [...prevQuestions,newQuestion]);
    }

    function publishQuiz()
    {
      //sends the quiz data and questions array as one object to the api or database
      console.log(questions);
    }

    
  return (
    <div className='h-screen md:h-full w-full  bg-base-300  md:flex-col md:justify-center md:items-center'>
      <h1 className='text-white text-2xl font-bold pt-3 md:pt-8'>Create A Quiz</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full  rounded-xl p-10 md:justify-center md:items-center text-white">
        <section className="flex-col md:flex md:w-2/4">
            
        
        {
          question < 1?
            <CreateTopic/>://first form to display
              (question > Number(quizData.numQuestions)?
                <PublishQuiz/>://last component to be displayed
                  <CreateQuestions question={question}/>)//all the other forms between first and last
        }
        
        {
          (question==0) || ((question) < Number(quizData.numQuestions))?
            <button className="btn-primary btn btn-square text-white w-full mt-5">Continue to Question {question+1}</button>//displayed on every question and first component
              :<button className="btn-primary btn btn-square text-white w-full mt-5">Publish Quiz</button>//displayed at the last question and component
        }
    
        </section>
      </form>
    </div>
  )
}

export default Create
