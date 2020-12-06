import React from 'react';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component={SignUp} ></Route>
      <Route  path='/login' component={Login} ></Route>
    </div>
    </Router>
  );
}

export default App;
