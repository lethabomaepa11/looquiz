import React from 'react'

export const getCorrectAnswer = (correctAnswer,answers) =>{
    let answer = null;
    switch(correctAnswer)
    {
        case 'a':
            answer = answers.a;
            break;
        case 'b':
            answer = answers.b;
            break;
        case 'c':
            answer = answers.c;
            break;
        case 'd':
            answer = answers.d;
            break;
    }

    return answer;
}
const ResultSummary = ({question,answers,response}) => {
    const correctAnswer = getCorrectAnswer(question.correctAnswer,answers[0]);
  return (
    <div className='my-5 border-t'>
        <p className='font-bold'>Question {response.question}</p>
        <p className='py-2'>{question.text}</p>
        <p className='font-bold'>Your answer: {response.answer}</p>
        <p className='font-bold'>Correct answer: {correctAnswer}</p>
        {correctAnswer===response.answer?<p className='text-green-300'>Correct</p>:<p className='text-red-300'>Incorrect</p>}
    </div>
  )
}

export default ResultSummary
