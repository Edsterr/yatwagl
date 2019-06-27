import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import Profile from '../ProfilePage/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register.js';

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
      return <Profile email={this.state.email} />;
    }
  }

  submitLogin(email, password) {
      alert(email + '\n' + password);
      this.setState({ email });
  }

  loginPage() {
    console.log(this);
   return <Login handleSubmit={this.submitLogin.bind(this)} />
  }

  render() {
    console.log(this.state.email);
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" render={this.isLoggedIn.bind(this)} /> 
          <Route path="/login" render={this.loginPage.bind(this)} />
          <Route path="/Register" component={Register} />
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
