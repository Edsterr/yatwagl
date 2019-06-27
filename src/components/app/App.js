import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import Profile from '../ProfilePage/Profile';
import Register from '../Register/Register.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  isLoggedIn() {
    if (this.state.name === '') {
      return <Home />;
    } else {
      return <Profile name={this.state.name}/>;
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
