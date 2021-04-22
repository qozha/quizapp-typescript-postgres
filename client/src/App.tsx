import React, {useEffect, useState} from 'react';
import QuizItem from './components/QuizItem'
import {getQuizzes, getQuiz, addAttempt} from './API'
import {Route, Switch, Link} from 'react-router-dom'
import TakeQuiz from './components/TakeQuiz'

const App:React.FC = ():React.ReactElement => {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([])
  const [quiz, setQuiz] = useState<IQuiz>()


  useEffect(() => {
    getQuizzesE()
  }, [])

  const getQuizzesE = () => {
    getQuizzes().then((res:any) => setQuizzes(res.data)).catch((err) =>
    console.log(err))
  }

  console.log("take?")
  return(
    <main className='App'>
      <h1>Take a quiz</h1>
      {
        quizzes.map((quiz) => <QuizItem 
        quiz={quiz}
        />)
      }
      
      <Switch>
        <Route path="/edit/:id" component={TakeQuiz}/>
      </Switch>
    </main>
  )




}

export default App