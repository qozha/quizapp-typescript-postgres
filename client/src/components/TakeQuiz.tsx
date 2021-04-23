import React, { useEffect, useState} from 'react';
import {Route, Switch, Link, useParams} from 'react-router-dom'
import { getQuiz } from '../API';
import QuestionItem from './QuestionItem';


const TakeQuiz:React.FC = ():React.ReactElement =>{

const [quiz, setQuiz] = useState<IQuiz>()

let {id} = useParams<Record<string, string>>()

const getQuizE = () => {
  getQuiz(id).then((res:any) => setQuiz(res.data)).catch((err) =>
  console.log(err))

  console.log(quiz?.quizname)
}

if(!quiz)getQuizE();

return(
  <main className='App'>
  <h1>Quiz time</h1>
  <h2>{quiz?.quizname}</h2>
  {
    quiz?.questions.map((question) => 
    <QuestionItem question = {question}/>
    )
  }
</main>
)
}

export default TakeQuiz