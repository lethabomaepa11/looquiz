'use client'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import CreateTopic from '../components/CreateTopic'
import CreateQuestions from '../components/CreateQuestions'


const Create = () => {
    const [question, setQuestion] = useState(0)
    const [quizData,setQuizData] = useState({topic:"",
      numQuestions:0,
      timeLimit:0,
      description:""})
    let numQuestions = null;

    function handleSubmit(e)
    {
        e.preventDefault()
        //the first data to get is for the quiz, topic, num questions, time limit, description
        var formData = new FormData(e.target);
        const form_values = Object.fromEntries(formData);
        console.log(form_values.topic);
        const inputs = document.getElementsByClassName("inputs");

       for(let i = 0; i < inputs.length;i++)
        {
          inputs[i].value = "";
        }

        if(question === 0)
          {
              setQuizData({topic: form_values.topic.toString(),
                numQuestions: Number(form_values.numQuestions),
                timeLimit: Number(form_values.timeLimit),
                description: form_values.description.toString()
              })
              
              console.log(numQuestions)
              console.log(quizData);
          }

        setQuestion(prevQuestion => 
            {
                return ++prevQuestion;
            }
        )
        scrollToTop()
    }

    const isBrowser = () => typeof window !== 'undefined';
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className='h-screen md:h-full w-full  bg-base-300  md:flex-col md:justify-center md:items-center'>
      <h1 className='text-white text-2xl font-bold pt-3 md:pt-8'>Create A Quiz</h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full  rounded-xl p-10 md:justify-center md:items-center text-white">
        <section className="flex-col md:flex md:w-2/4">
            
        
        {question < 1?<CreateTopic/>:<CreateQuestions
        question={question}/>}
        
        {!(question+1 == numQuestions)?<button className="btn-primary btn btn-square text-white w-full mt-5">Continue to Question {question+1}</button>
        :<button className="btn-primary btn btn-square text-white w-full mt-5">Publish Quiz</button>}
        </section>
      </form>
    </div>
  )
}

export default Create
