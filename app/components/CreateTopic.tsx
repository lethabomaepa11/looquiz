import React from 'react'

const CreateTopic = () => {
  return (
    <div>
      <label>
            <div className="label">
                <span className="label-text text-white">Topic</span>
            </div>
            <input id="topic" name="topic" type="text" placeholder="e.g Javascript basics" className="inputs input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-info">Required</span>
            </div>
        </label>
        <label className="w-full">
            <div className="label">
                <span className="label-text text-white">Number of questions</span>
            </div>
            <input id="numQuestions" name="numQuestions" type="number" placeholder="e.g 11" className="inputs input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-info">Required</span>
            </div>
        </label>
        <label className="w-full">
            <div className="label">
                <span className="label-text text-white">Time limit (mins)</span>
            </div>
            <input id="timeLimit" name="timeLimit" type="number" placeholder="e.g 2" className="inputs input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-info">Enter the time limit or leave blank</span>
            </div>
        </label>
        <label className="form-control w-full ">
            <div className="label">
                <span className="label-text text-white">Description</span>
            </div>

            <textarea id="description" name="description" className="inputs textarea textarea-primary" placeholder="e.g 5 Questions to test your javascript knowledge"></textarea>
            <div className="label ">
                <span className="label-text-alt text-info">Optional</span>
            </div>
        </label>
    </div>
  )
}

export default CreateTopic
