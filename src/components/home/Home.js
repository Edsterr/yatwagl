import React from 'react';
import logo from '../../assets/images/logo.svg';
import './Home.css';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

render() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QRCode value= {'profile/' + this.props.email } size="192" includeMargin="true" level="H" />
        <Link to="/login"><Button color="white">Login</Button></Link>
      </header>
    </div>
  );
}
}

export default Home;
