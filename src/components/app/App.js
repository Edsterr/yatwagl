import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar.js';
import Register from '../Register/Register.js';

function App() {
  return (
    <Router>
      <div>
        <MenuBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Register" component={Register} />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
