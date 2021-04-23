import { lighten } from '@material-ui/core'
import React, { useEffect,  useState} from 'react'
import { Link } from 'react-router-dom'
import AnswerItem from './AnswerItem'

type Props = QuestionProps & {
    // updateTodo: (todo: ITodo) => void
    // deleteTodo: (id: string) => void
}

const QuizItem: React.FC<Props> = ({ question }) => {

    const checkTodo: string = ''
    return (
        <div className='Card--text'>
        <h4 className={checkTodo}> {question.question}</h4>

        {
            question.answers.map((answer) => 
                <AnswerItem answer = {answer}/>
            )
        }
      </div>
    )
  }

export default QuizItem