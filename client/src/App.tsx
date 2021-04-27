import React, {useEffect, useState} from 'react';
import {getQuizzes} from './API'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import TakeQuiz from './components/TakeQuiz'
import QuizList from './components/QuizList'

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
    <BrowserRouter>
      <Switch>
        <Route exact path = "/"><QuizList/></Route>
        <Route path="/quiz/:id"><TakeQuiz></TakeQuiz></Route>
      </Switch>
    </BrowserRouter>
  )




}

export default App