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
                      <div className="row"><ControlLabel>First name</ControlLabel></div>
                      <div className="row">
                          <FormControl
                              autoFocus
                              type="fname"
                              value={this.state.fname}
                              onChange={this.handleChange}
                          />
                      </div>

                  </FormGroup>
                  <FormGroup controlId="lname" bsSize="large">
                      <div className="row"><ControlLabel>Last name</ControlLabel></div>
                      <div className="row">
                          <FormControl
                          autoFocus
                          type="lname"
                          value={this.state.lname}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                      <div className="row"><ControlLabel>Password</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="transcription" bsSize="large">
                      <div className="row"><ControlLabel>Transcription</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="transcription"
                          value={this.state.transcription}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="audio" bsSize="large">
                      <div className="row"><ControlLabel>Pronunciation of name</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="audio"
                          value={this.state.audio}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="email" bsSize="large">
                      <div className="row"><ControlLabel>Email</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="role" bsSize="large">
                      <div className="row"><ControlLabel>Role</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="role"
                          value={this.state.role}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="photo" bsSize="large">
                      <div className="row"><ControlLabel>Photo</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="photo"
                          value={this.state.photo}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                  <FormGroup controlId="linkedIn" bsSize="large">
                      <div className="row"><ControlLabel>LinkedIn</ControlLabel></div>
                      <div className="row"><FormControl
                          autoFocus
                          type="linkedIn"
                          value={this.state.linkedIn}
                          onChange={this.handleChange}
                      />
                      </div>
                  </FormGroup>
                    <FormGroup>
                      <div className="row"><Button
                          variant="primary"
                          block
                          bsSize="large"
                          type="submit">
                          Register
                      </Button>
                      </div>
                    </FormGroup>
              </form>
            </div>
        );
    }
}
