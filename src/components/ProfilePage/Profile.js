import React from 'react';
import { withRouter } from 'react-router-dom';
import { ReactMic } from 'react-mic';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.email == '' && this.props.match.params.email == undefined) {
            this.props.history.push("/");
        } else {
            var email;
            if (this.props.match.params.email != undefined) {
                email = this.props.match.params.email;
            } else {
                email = this.props.email;
            }
            var getData = new XMLHttpRequest();
            var self = this;
            getData.onreadystatechange = function() { 
                if (getData.readyState == 4 && getData.status == 200) {
                    var data = JSON.parse(getData.responseText);
                    self.setState({
                        firstName: data.fname,
                        secondName: data.lname,
                        role: data.role,
                        email: email,
                        description: data.description,
                        pronounciation: data.pronounciation
                    });
                } else if (getData.status == 404) {
                    self.props.history.push("/error");
                }
            }
            getData.open("GET", `http://localhost:8080/users/${email}`, true); // true for asynchronous 
            getData.send(null);

            var getSound = new XMLHttpRequest();
            var self = this;
            getSound.onreadystatechange = function() { 
                if (getSound.readyState == 4 && getSound.status == 200) {
                    var data = JSON.parse(getSound.responseText);
                    self.setState({
                        button: {},
                        reactmic: {display: "none"}
                    });
                    self.sound = new Audio(data.sound);
                } else if (getSound.status == 404) {
                    self.setState({
                        button: {display: "none"},
                        reactmic: {}
                    })
                }
            }
            getSound.open("GET", `http://localhost:8080/audio/${email}`, true); // true for asynchronous 
            getSound.send(null);
        }
        this.state = {
            firstName: '',
            secondName: '',
            role: '',
            email: '',
            description: '',
            pronunciation: '',
            record: false,
            audio: <p>Audio</p>,
            button: {display: "none"},
            reactmic: {display: "none"}
        };
        this.onPlay = this.onPlay.bind(this);
        this.onStop = this.onStop.bind(this);
        this.deleteSound = this.deleteSound.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
    }

    startRecording = () => {
        console.log("start");
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        console.log("stop");
        this.setState({
            record: false
        });
    }

    onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        console.log(this);
        var self = this;
        var reader = new FileReader();
        reader.onloadend = function() {
            console.log(self);
            var base64data = reader.result;    
            var data = {
                id: self.state.email,
                sound: base64data
            }
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.status == 200)
                    console.log(xmlHttp.responseText);
            }
            xmlHttp.open("POST", `http://localhost:8080/audio`, true); // true for asynchronous 
            xmlHttp.setRequestHeader('Content-type', 'application/json');
            console.log(data);
            xmlHttp.send(JSON.stringify(data));            
        }
        reader.readAsDataURL(recordedBlob.blob); 
    }
    
    onPlay(){
      this.sound.play();
    }

    deleteSound() {
        var deleteSoundFile = new XMLHttpRequest();
        deleteSoundFile.onreadystatechange = function() { 
            if (deleteSoundFile.readyState == 4 && deleteSoundFile.status == 200) {
                console.log(deleteSoundFile.responseText);
            }
        }
        deleteSoundFile.open("DELETE", `http://localhost:8080/audio/${this.state.email}`, true); // true for asynchronous 
        deleteSoundFile.send(null);
    }

    render() {
        return (
            <div className="container">
                <div className="span3 well">
                    <div className="modal-content">
                        <div className="modal-body">
                            <center>
                                <img
                                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
                                    name="aboutme" width="140" height="140" border="0" className="img-circle"/>
                            </center>
                        </div>
                        <Card>
                            <CardActionArea>
                                <CardMedia />
                                <CardContent>
                                    <h3 className="media-heading">{this.state.firstName + ' ' + this.state.secondName}<small>{this.state.role}</small></h3>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        { this.state.email }
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        { this.state.description }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <div style={this.state.button}>
                                <Button onClick={this.onPlay} size="small" color="primary">
                                    Pronounce name ({ this.state.pronunciation })
                                </Button>
                                <Button onClick={this.deleteSound} size="small" color="primary">Delete Sound</Button>
                                </div>
                                <div style={this.state.reactmic}>
                                    <ReactMic
                                        record={this.state.record}
                                        className="sound-wave"
                                        onStop={this.onStop}
                                        onData={this.onData}
                                        strokeColor="#000000"
                                        backgroundColor="#FF4081" />
                                    <button onClick={this.startRecording} type="button">Start</button>
                                    <button onClick={this.stopRecording} type="button">Stop</button>
                                </div>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);