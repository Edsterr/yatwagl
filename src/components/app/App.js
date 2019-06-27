import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import Profile from '../ProfilePage/Profile';
import Register from '../Register/Register.js';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profilePage" component={Profile} />
        <Route path="/Register" component={Register} />
          <MenuBar />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
