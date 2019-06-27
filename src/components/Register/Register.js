import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Register.css';
import Home from '../home/Home';
import MenuBar from '../app/MenuBar.js';
import { Button } from "react-bootstrap";

export default class Register extends React.Component {
    //constructor(){}
    render(){
        return (
            <main>
              <form>
                    First name: <input type="text" name="fname"></input>
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
