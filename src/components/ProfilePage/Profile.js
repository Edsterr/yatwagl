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

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            secondName: this.props.secondName,
            description: this.props.description
        }
    }

    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        image = ".././assets/images/genericProfilePicture.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            { this.state.firstName + ' ' + this.state.secondName }
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
            </Card>
        )
    }

}
