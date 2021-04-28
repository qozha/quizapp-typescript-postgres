import React, { useState } from 'react'
import TakeQuiz from './TakeQuiz'

type Props = { 
}

const AddTodo: React.FC<Props> = () => {
  const [formData, setFormData] = useState<IUsername | {}>()

  const [userName, setuserName] = useState<string>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSubmit = (formData: IUsername | any) => {
    const todo: Omit<IUsername, 'id'> = {
        username: formData.username
    }  
    setuserName(todo.username)
    }

  if(!userName) 
{  return (
    <form className='Form' onSubmit={(e) => handleSubmit(formData)}>
      <div>
        <div>
          <label htmlFor='task'>Name</label>
          <input onChange={handleForm} type='text' id='username' />
        </div>
      </div>
      <button disabled={formData === undefined ? true: false} >Take the quiz!</button>
    </form>
  )}

  return(
    <TakeQuiz username = {userName}></TakeQuiz>
  )

}

export default AddTodo
