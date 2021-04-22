import { lighten } from '@material-ui/core'
import React, { useEffect,  useState} from 'react'
import { Link } from 'react-router-dom'

type Props = QuizProps & {
    // updateTodo: (todo: ITodo) => void
    // deleteTodo: (id: string) => void
}

const QuizItem: React.FC<Props> = ({ quiz}) => {
    const checkTodo: string = ''
    return (
      <div className='Card'>
        <div className='Card--text'>
          <h3 className={checkTodo}>Quiz name: {quiz.quizname}</h3>
          <h4 className={checkTodo}> id: {quiz.id}</h4>
        </div>
        <li className='Card--button'>
          {<Link to = {`/quiz/:${quiz.id}`}
          >
            Take
          </Link>}
        </li>
      </div>
    )
  }

export default QuizItem