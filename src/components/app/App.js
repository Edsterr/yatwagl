import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar.js';
import ProfilePage from '../ProfilePage/ProfilePage.js';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profilePage" component={ProfilePageFunction} />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
