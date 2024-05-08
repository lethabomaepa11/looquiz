import React from 'react'

const ContinueBtn = ({onClick}: any) => {
  return (
    <button type="button" className='btn btn-square w-2/5 px-5 btn-primary bottom-0' onClick={onClick}>Continue</button>
  )
}

export default ContinueBtn
