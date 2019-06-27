import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar.js';
import ProfilePage from './ProfilePage.js';

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

// function ProfilePageFunction() {
//     return <ProfilePage />;
// }

function Header() {
  return (
      <MenuBar />
  );
}

function ProfilePageFunction() {
    return <ProfilePage/>;
}

export default App;
