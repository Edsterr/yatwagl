import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Register.css';
import Home from '../home/Home';
import MenuBar from '../app/MenuBar.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fname:"",
            lname:"",
            password:"",
            transcription:"",
            audio:"",
            email:"",
            role:"",
            photo:"",
            linkedIn:""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        return (
            <div className="Register">
              <form>
                  <FormGroup controlId="fname" bsSize="large">
                      <ControlLabel>First name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="fname"
                          value={this.state.fname}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="lname" bsSize="large">
                      <ControlLabel>Last name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="lname"
                          value={this.state.lname}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                          autoFocus
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="transcription" bsSize="large">
                      <ControlLabel>Transcription</ControlLabel>
                      <FormControl
                          autoFocus
                          type="transcription"
                          value={this.state.transcription}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="audo" bsSize="large">
                      <ControlLabel>Pronunciation of name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="audio"
                          value={this.state.audio}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="email" bsSize="large">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                          autoFocus
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="role" bsSize="large">
                      <ControlLabel>Role</ControlLabel>
                      <FormControl
                          autoFocus
                          type="role"
                          value={this.state.role}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="photo" bsSize="large">
                      <ControlLabel>Photo</ControlLabel>
                      <FormControl
                          autoFocus
                          type="photo"
                          value={this.state.photo}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="linkedIn" bsSize="large">
                      <ControlLabel>LinkedIn</ControlLabel>
                      <FormControl
                          autoFocus
                          type="linkedIn"
                          value={this.state.linkedIn}
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                    <input type="submit" value="Register"></input>
              </form>
            </div>
        );
    }
}
