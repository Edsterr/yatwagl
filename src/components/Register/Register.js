import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Register.css';
import Home from '../home/Home';
import MenuBar from '../app/MenuBar.js';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import FixedAspectRatio from "../app/aspect-ratio.js";

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
        console.log(event.target)
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

         // for (let name of data.keys()) {
         //  const input = form.elements[name];
         //   const parserName = input.dataset.parse;
         // }
        this.setState({
          res: stringifyFormData(data),
        });

    }


    render(){
        return (

            <div className="Register">
              <form onSubmit={this.handleSubmit}>
              <div className="column">
                  <label htmlFor="First name">First name:</label>
                  <input name="fname" type="text" onChange={this.handleChange}  />


                  <label htmlFor="Last name">Last name:</label>
                  <input name="lname" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Password">Password:</label>
                  <input name="password" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Transcription of name">Transcription of name:</label>
                  <input name="transcription" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Pronounciation of name">Pronounciation of name:</label>
                  <input name="pronounce" type="audio" onChange={this.handleChange}  />

                  <label htmlFor="LinkedIn">LinkedIn:</label>
                  <input name="LinkedIn" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Email">Email:</label>
                  <input name="email" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Role">Role:</label>
                  <input name="role" type="text" onChange={this.handleChange}  />

                  <label htmlFor="Photo">Photo:</label>
                  <input name="photo" type="text" onChange={this.handleChange}  />

                  <input type="submit" value="Submit"></input>
              </div>
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
