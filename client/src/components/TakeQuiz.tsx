import React, { useState} from 'react';
import { useParams, withRouter} from 'react-router-dom'
import { getQuiz, createAttempt } from '../API';
import QuestionItem from './QuestionItem';


const TakeQuiz:React.FC<Username> = ({username}):React.ReactElement =>{

const [quiz, setQuiz] = useState<IQuiz>()

const [AttemptID, setAttemptID] = useState<number>()

let {id} = useParams<Record<string, string>>()

const getQuizE = () => {
  getQuiz(id).then((res:any) => setQuiz(res.data)).catch((err) =>
  console.log(err))
}


const handleAttemptCreate = async (quizID: number) => { 
  if(quizID) {
    console.log("why")
    await createAttempt(quizID, username).then((res:any) => setAttemptID(res.data.id)).catch((err) => console.log(err))
  }
}

const handleSubmit = () => {
  console.log(AttemptID)
}


if(!quiz)getQuizE();

if(!AttemptID) handleAttemptCreate(Number(quiz?.id))

const Button = withRouter(({ history }) => (


  <button
    type='button'
    onClick={() => { handleSubmit(); history.push('/') }}
  >
    Submit
  </button>
))

return(
  <main className='App'>
  <h1>Quiz time</h1>
  <h2>{quiz?.quizname}</h2>
      {
      quiz?.questions.map((question) => 
      <QuestionItem question = {question} key = {question.id} attemptID = {Number(AttemptID)}/>)
      }
  <Button/>

</main>
)
}





export default TakeQuiz