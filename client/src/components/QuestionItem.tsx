import React, { useState} from 'react'
import { updateQuestionAttempt } from '../API'

type Props = QuestionProps & {
}


const QuizItem: React.FC<Props> = ({ question, attemptID}) => {

  const [checkBox, setCheckBox] = useState();


  const handleInputChange = (answer: any) => {
    console.log(answer)
    const questionAttempt: IQuestionAttempt = {
        questionID: Number(question.id),
        answer: answer
    }
    updateQuestionAttempt(String(attemptID), questionAttempt)
    setCheckBox(answer.answer);
  };
  

  const checkTodo: string = ''
  return (
      <div className='Card--text'>
      <h4 className={checkTodo}> {question.question}</h4>
      {
        question.answers.map((answer) => 
        <label>
          <div>
            <input
              type="radio"
              value={checkBox}
              name={question.id}
              onChange={e => {
                // setAnswer(answer.id)
                handleInputChange(answer)
              }}
              checked={answer.answer === checkBox}
              // key = {answer.id}
            />
            {answer.answer}
          </div>
        </label>
          )
      }
    </div>
  )
}

export default QuizItem