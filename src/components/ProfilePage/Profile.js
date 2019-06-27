import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import soundFile from './kk.mp3';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.onPlay = this.onPlay.bind(this);
        this.sound = new Audio(soundFile);
          }

        onPlay(){
          this.sound.play();
    }


    render() {
        return (

            // <Paper>
            //     <Typography variant="h5" component="h3">
            //         This is a sheet of paper.
            //     </Typography>
            //     <Typography component="p">
            //         Paper can be used to build surface or other elements for your application.
            //     </Typography>
            // </Paper>

            <button onClick={this.onPlay}>Click me </button>
        )
    }

}
