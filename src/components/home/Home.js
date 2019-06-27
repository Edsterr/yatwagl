import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React maybe
        </a>
        <Link to="/login"><Button color="white">Login</Button></Link>
      </header>
    </div>
  );
}

export default Home;
