import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            secondName: this.props.secondName,
            role: this.props.role,
            email: this.props.email,
            description: this.props.description
        }
    }

    render() {
        return (
            <div className="container">
                <div className="span3 well">

                            <div className="modal-content">
                                <Card>
                                    <CardActionArea>
                                        <CardMedia
                                            image = ".././assets/images/genericProfilePicture.jpg"
                                        />
                                        <CardContent>
                                            <h3 className="media-heading">{this.state.firstName + ' ' + this.state.secondName}<small>{this.state.role}</small></h3>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                { this.state.email }
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                { this.state.description }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                    <CardActions>
                                        <button onClick={this.onPlay}>Click me </button>
                                    </CardActions>
                                </Card>
                                <div className="modal-body">
                                    <center>
                                        <img
                                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R"
                                            name="aboutme" width="140" height="140" border="0" className="img-circle"/>
                                        <span><strong>Role: </strong></span>
                                        <span>{this.state.role}</span>
                                    </center>
                                    <center>
                                        <p className="text-left"><strong>Description: </strong>
                                            { this.state.description }
                                        </p>
                                    </center>
                                </div>
                            </div>
                        
                </div>
            </div>
        )
    }
}
