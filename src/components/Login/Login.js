import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSubmit(this.state.email, this.state.password);
        this.props.history.push('/profile');
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
        console.log(event.target.value);
        console.log("email = " + this.state.email);
        console.log("password = " + this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Email: </label>
                    <input type="text" id="email" value={this.state.email} onChange={this.handleChange} />

                    <label>  Password: </label>
                    <input type="text" id="password" value={this.state.password} onChange={this.handleChange} />

                    <input type="submit" id= "submit" value="Submit"></input>
                </form>
                <h4>New to yatwagl? <Link to="/register">Register</Link></h4>
            </div>
        )
    }
}

export default withRouter(Login);
