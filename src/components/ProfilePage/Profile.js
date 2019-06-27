import React from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import soundFile from './kk.mp3';


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
            var xmlHttp = new XMLHttpRequest();
            var self = this;
            xmlHttp.onreadystatechange = function() { 
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    var data = JSON.parse(xmlHttp.responseText);
                    console.log(data);
                    self.setState({
                        firstName: data.fname,
                        secondName: data.sname,
                        role: data.role,
                        description: data.description,
                        pronounciation: data.pronounciation
                    });
                } else if (xmlHttp.status == 404) {
                    self.props.history.push("/error");
                }
            }
            xmlHttp.open("GET", `http://localhost:8080/users/${email}`, true); // true for asynchronous 
            xmlHttp.send(null);
        }
        this.state = {
            firstName: '',
            secondName: '',
            role: '',
            email: email,
            description: '',
            pronunciation: ''
        };
        this.onPlay = this.onPlay.bind(this);
        this.sound = new Audio(soundFile);
    }
    
    onPlay(){
      this.sound.play();
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
                                <Button onClick={this.onPlay} size="small" color="primary">
                                    Pronounce name ({ this.state.pronunciation })
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);