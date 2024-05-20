import React from 'react'

const CreateQuestions = ({question}:any) => {
  return (
    <div className=''>
      <label className="form-control w-full md:max-w-2/4">
      <h1 className='text-white text-2xl font-bold'>Question {question}</h1>
            <div className="label">
                <span className="label-text text-white">Question</span>
            </div>
        
            <textarea id="question" name="question" className="inputs textarea textarea-primary" placeholder="e.g 5 Which one is not javascript framework?"></textarea>
            <div className="label">
                <span className="label-text-alt text-info">Required</span>
            </div>
        </label>
        <h1 className='text-white text-md font-bold'>Answers</h1>
        <label className="font-bold">a:</label><input required id="a" name="a" type="text" placeholder="e.g Django" className="inputs input input-bordered w-full my-3" />
        <label className="font-bold">b:</label><input required id="b" name="b" type="text" placeholder="e.g Next.js" className="inputs input input-bordered w-full my-3" />       
        <label className="font-bold">c:</label><input required id="c" name="c" type="text" placeholder="e.g React.js" className="inputs input input-bordered w-full my-3" />
        <label className="font-bold">d:</label><input required id="d" name="d" type="text" placeholder="e.g JQuery" className="inputs input input-bordered w-full my-3" />
        <h1 className='text-white text-md font-bold'>Choose the correct answer</h1>
        <select required id="correct_answer" name="correct_answer" className="select select-info w-full my-3">
            <option disabled selected>Choose the correct answer</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
        </select>
     </div>
  )
}

export default CreateQuestions
