import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import QrReader from 'react-qr-scanner'

class qr extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 500,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(result){
    if(result){
      this.setState({ result })
      window.location.href=this.state.result
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    var React = require('react');
    var QRCode = require('qrcode.react');

    return(
      <div>
        <div><h3>Scan QR code</h3></div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>


        <QRCode value= "register" />
        <a href={ this.state.result }>
          <button>Click me</button>
        </a>
      </div>
    )
  }
}

export default qr;
