import React, {useEffect, useState} from 'react';
import {getQuizAttempts} from '../API'
import { useParams } from 'react-router-dom';


const LeaderboardItem:React.FC = ():React.ReactElement => {
    const [attempts, setAttempts] = useState<IAttempt[]>([])
  
    useEffect(() => {
      getAttemptsE()
    }, [])
    
    let {id} = useParams<Record<string, string>>()

    const getAttemptsE = () => {
      getQuizAttempts(id).then((res:any) => setAttempts(res.data)).catch((err) =>
      console.log(err))
    }

    attempts.sort((a,b) => b.score - a.score)

    const style = {
        width: "100%"
    } as React.CSSProperties

    return(
        <div className='App'>
          <h1>Here are the attempts: </h1>
          <table style = {style}>
              <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
          {
            attempts.map((attempt) => 
            <tr style = {style} >
                <td>{attempt.id}</td>
                <td>{attempt.username}</td>
                <td>{attempt.score}</td>
            </tr>
        )    
          }
          </tbody>
          </table>
        </div>
      ) 
}

export default LeaderboardItem