import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import qr from '../QR/QR';
import Profile from '../ProfilePage/Profile';
import Register from '../Register/Register.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'Simon@jpmchase.com'
    }
  }

  isLoggedIn() {
    if (this.state.email === '') {
      console.log("Here");
      return <Home />;
    } else {
      return <Profile email={this.state.email} />;
    }
  }

  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" render={this.isLoggedIn.bind(this)} />
          <Route path="/Register" component={Register} />
          <Route path="/qr" component={qr} />
          <MenuBar />
        </div>
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

export default App;
