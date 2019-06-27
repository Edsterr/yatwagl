import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import Profile from '../ProfilePage/Profile';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profilePage" component={getSampleProfilePage} />
          <MenuBar />
      </div>
    </Router>
  );
}

function getSampleProfilePage() {
    return new Profile({
        firstName: "John",
        secondName: "Smith",
        description: "A Software Developer at JP Morgan (Glasgow)"
    });
}

function About() {
  return <h2>About</h2>;
}

export default App;
