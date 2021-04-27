import React, { } from 'react'
import { Link } from 'react-router-dom'


const QuizItem: React.FC<QuizProps> = ({ quiz}) => {

    const checkTodo: string = ''
    return (
      <div className='Card'>
        <div className='Card--text'>
          <h3 className={checkTodo}>Quiz name: {quiz.quizname}</h3>
          <h4 className={checkTodo}> id: {quiz.id}</h4>
        </div>
        <li className='Card--button'>
          {<Link to = {`/quiz/${quiz.id}`}
          >
            Take
          </Link>}
        </li>
      </div>
    )
  }

export default QuizItem