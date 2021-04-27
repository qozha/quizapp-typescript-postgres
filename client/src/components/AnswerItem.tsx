import React, { } from 'react'

const QuizItem: React.FC<AnswerProps> = ({ answer }) => {

    const checkTodo: string = ''
    return (
        <div className='Card--text'>
        <h5 className={checkTodo}> {answer}</h5>
      </div>
    )
  }

export default QuizItem