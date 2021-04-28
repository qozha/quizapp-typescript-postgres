import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AttemptLogin from './components/AttemptLogin';
import QuizList from './components/QuizList';
import LeaderboardList from './components/LeaderboardList';
import LeaderboardItem from './components/LeaderboardItem';

ReactDOM.render(




    <BrowserRouter>

   <Link to = {`/`}>
  Home
   </Link>

    <Switch>
      <Route exact path="/"><App></App></Route>
      <Route exact path="/quiz"><QuizList /></Route>
      <Route path="/quiz/:id"><AttemptLogin></AttemptLogin></Route>
      <Route exact path="/leaderboards/"><LeaderboardList/></Route>
      <Route path="/leaderboards/:id"><LeaderboardItem></LeaderboardItem></Route>
    </Switch>
    
    </BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
