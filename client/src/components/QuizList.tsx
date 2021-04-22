import React, {useEffect, useState} from 'react';
import QuizItem from './QuizItem'
import {getQuizzes, getQuiz, addAttempt} from '../API'
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom'
import TakeQuiz from './TakeQuiz'

const QuizList:React.FC = ():React.ReactElement => {
    const [quizzes, setQuizzes] = useState<IQuiz[]>([])
  
    useEffect(() => {
      getQuizzesE()
    }, [])
  
    const getQuizzesE = () => {
      getQuizzes().then((res:any) => setQuizzes(res.data)).catch((err) =>
      console.log(err))
    }

    return(
        <main className='App'>
          <h1>Take a quiz</h1>
          {
            quizzes.map((quiz) => <QuizItem 
            quiz={quiz}
            />)
          }
        </main>
      )
}

export default QuizList