import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Register.css';
import Home from '../home/Home';
import MenuBar from '../app/MenuBar.js';
import { Button } from "react-bootstrap";

export default class Register extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: '', };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }


    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render(){
        return (
            <main>
              <form>
                    First name: <input type="text" value={this.state.value} onChange={this.handleChange} name="fname"></input>
                    Last name: <input type="text" name="lname"></input>
                    Password: <input type="text" name="password"></input>
                    Transcription of name: <input type="text" name="transcription"></input>
                    Pronounciation of name: <input type="audio" name="audio"></input>
                    Email: <input type="text" name="email"></input>
                    Role: <input type="text" name="role"></input>
                    Photo: <input type="image" name="photo"></input>
                    LinkedIn: <input type="url" name="linkedIn"></input>

                    <input type="submit" value="Submit"></input>
              </form>
                    <Link to="/Home"><Button color="white">Home</Button></Link>
                    <Button color="white">Register</Button>
            </main>
        );
    }
}
