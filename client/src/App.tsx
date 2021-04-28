import React from 'react';
import {Link} from 'react-router-dom'


const App:React.FC = ():React.ReactElement => {

  return(
  <main>    
    <li className='Card--button'>
      {
        <Link to = {`/quiz`}>
          Take a quiz
        </Link>
      }
    </li>
    <li className='Card--button'>
      {
        <Link to = {`/leaderboards`}>
          Leaderboards
        </Link>
      }
    </li>
  </main>

  )




}

export default App