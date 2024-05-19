"use client"
import Card from "./Card"
import { prevent } from '../actions/actions'

const CardForm = ({quiz,isLoggedIn}) => {
  return (
    <form key={quiz.id} action={prevent}>
                  <Card 
                    key={quiz.id}
                    isLoggedIn={isLoggedIn}
                    quiz = {quiz}/>
    </form>
  )
}

export default CardForm
