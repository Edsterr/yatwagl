import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Register.css';
import Home from '../home/Home';
import MenuBar from '../app/MenuBar.js';
import { Button } from "react-bootstrap";

export default class Register extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fname: '',
        surname: '',
        password: '',
        transcription: '',
        audio: '',
        email: '',
        role: '',
        photo: '',
        linkedin: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      }


      handleChange (event) {
          // check it out: we get the evt.target.name (which will be either "email" or "password")
          // and use it to target the key on our `state` object with the same name, using bracket syntax
          this.setState({ [event.target.name]: event.target.value });
      }

      handleSubmit(event) {
          //event.preventDefault();
      }

    render(){
        return (
            <main>
              <form onSubmit={this.handleSubmit}>
                    First name: <input type="text" onChange={this.handleChange} name="fname"></input>
                    Surname: <input type="text" onChange={this.handleChange} name="surname"></input>
                    Password: <input type="text" onChange={this.handleChange} name="password"></input>
                    Transcription of name: <input type="text" onChange={this.handleChange} name="transcription"></input>
                    Pronounciation of name: <input type="audio" onChange={this.handleChange} name="audio"></input>
                    Email: <input type="text" onChange={this.handleChange} name="email"></input>
                    Role: <input type="text" onChange={this.handleChange} name="role"></input>
                    Photo: <input type="image" onChange={this.handleChange} name="photo"></input>
                    LinkedIn: <input type="url" onChange={this.handleChange} name="linkedIn"></input>

                    <input type="submit" value="Register"></input>
              </form>
                    <Link to="/Home"><Button color="white">Home</Button></Link>
            </main>
        );
    }
}
