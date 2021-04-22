import React, { useEffect,  useState} from 'react'

type Props = QuizProps & {
    // updateTodo: (todo: ITodo) => void
    // deleteTodo: (id: string) => void
    startQuiz: (id: string) =>void
}

const QuizItem: React.FC<Props> = ({ quiz, startQuiz}) => {
    const checkTodo: string = ''
    return (
      <div className='Card'>
        <div className='Card--text'>
          <h3 className={checkTodo}>Quiz name: {quiz.quizname}</h3>
          <h4 className={checkTodo}> id: {quiz.id}</h4>
        </div>
        <div className='Card--button'>
          {<button
            onClick={() => startQuiz(quiz.id)}
            className={'Card--button__done'}
          >
            Take
          </button>}
        </div>
      </div>
    )
  }

export default QuizItem