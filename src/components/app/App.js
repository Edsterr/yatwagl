import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import qr from '../QR/QR';
import History from '../History/History'
import Profile from '../ProfilePage/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register.js';
import FixedAspectRatio from "../app/aspect-ratio.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  isLoggedIn() {
    console.log(this.state.email);
    if (this.state.email === '') {
      console.log("Here");
      return <Home />;
    } else {
      return <Profile
            firstName = "John"
            secondName = "Smith"
            email = {this.state.email}
      />;
    }
  }

  submitLogin(email, password) {
      alert(email + '\n' + password);
      this.setState({email: email});
  }

  loginPage() {
   return <Login handleSubmit={this.submitLogin.bind(this)} />
  }

  render() {
    return (
      <Router>
        <div>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" render={this.isLoggedIn.bind(this)} />
            <Route path="/login" render={this.loginPage.bind(this)} />
            <Route path="/register" component={Register} />
            <Route path="/qr" component={qr} />
            <Route path="/qr" component={History} />

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
