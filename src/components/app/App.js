import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar.js';

function App() {
  return (
    <Router>
      <div>
        <MenuBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;