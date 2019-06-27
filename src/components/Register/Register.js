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
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (!event.target.checkValidity()) {
        	this.setState({
            invalid: true,
            displayErrors: true,
          });
          return;
        }
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
          const input = form.elements[name];
          const parserName = input.dataset.parse;
        }
        this.setState({
          res: stringifyFormData(data),
          invalid: false,
          displayErrors: false,
        });

    }

    render(){
        return (
            <div className="Register">
              <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="fname" bsSize="large">
                      <ControlLabel>First name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="fname"
                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="lname" bsSize="large">
                      <ControlLabel>Last name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="lname"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                      <ControlLabel>Password</ControlLabel>
                      <FormControl
                          autoFocus
                          type="password"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="transcription" bsSize="large">
                      <ControlLabel>Transcription</ControlLabel>
                      <FormControl
                          autoFocus
                          type="transcription"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="audo" bsSize="large">
                      <ControlLabel>Pronunciation of name</ControlLabel>
                      <FormControl
                          autoFocus
                          type="audio"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="email" bsSize="large">
                      <ControlLabel>Email</ControlLabel>
                      <FormControl
                          autoFocus
                          type="email"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="role" bsSize="large">
                      <ControlLabel>Role</ControlLabel>
                      <FormControl
                          autoFocus
                          type="role"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="photo" bsSize="large">
                      <ControlLabel>Photo</ControlLabel>
                      <FormControl
                          autoFocus
                          type="photo"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <FormGroup controlId="linkedIn" bsSize="large">
                      <ControlLabel>LinkedIn</ControlLabel>
                      <FormControl
                          autoFocus
                          type="linkedIn"

                          onChange={this.handleChange}
                      />
                  </FormGroup>
                  <Button
                      block
                      bsSize="large"
                      type="submit"
                  >
                      Register
                  </Button>
              </form>
            </div>
        );
    }
}

function stringifyFormData(fd) {
  const data = {};
	for (let key of fd.keys()) {
  	data[key] = fd.get(key);
  }
  console.log(JSON.stringify(data, null, 2));
  return JSON.stringify(data, null, 2);
}
