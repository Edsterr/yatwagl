import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
    <div><h3>Home</h3></div>
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let others scan your QR code to learn about you.
        </p>

        <h4>No QR code displayed? <Link to="/login">Login</Link></h4>
      </header>
    </div>
  );
}

export default Home;
