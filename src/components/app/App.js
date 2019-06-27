import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from '../home/Home';
import MenuBar from './MenuBar';
import ProfilePage from '../ProfilePage/ProfilePage';

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
      return <ProfilePage name={this.state.name}/>;
    }
  }

  render() {
    return (
      <Router>
        <div>
          <MenuBar />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profilePage" render={this.isLoggedIn.bind(this)} /> 
        </div>
      </Router>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

export default App;
