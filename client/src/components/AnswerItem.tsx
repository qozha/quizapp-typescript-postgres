import { lighten } from '@material-ui/core'
import React, { useEffect,  useState} from 'react'
import { Link } from 'react-router-dom'

type Props = AnswerProps & {
    // updateTodo: (todo: ITodo) => void
    // deleteTodo: (id: string) => void
}

const QuizItem: React.FC<Props> = ({ answer }) => {

    const checkTodo: string = ''
    return (
        <div className='Card--text'>
        <h5 className={checkTodo}> {answer}</h5>
      </div>
    )
  }

export default QuizItem