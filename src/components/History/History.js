import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
              <div><h3>People you have scanned</h3></div>
                <div>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Bernie Tim Lee <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Donald Gnuth <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Sergei Brine <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Eva Lovlaz <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Alan Turning <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Ace Hooper <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Larry Webpage <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Gill Bates <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Mike Zipperberg <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card>
                    <CardActionArea>
                        <CardMedia />
                        <CardContent>
                            <h3 className="media-heading">Olen Tusk <small>Profile | QR</small></h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </div>
            </div>
        );
   }
}
