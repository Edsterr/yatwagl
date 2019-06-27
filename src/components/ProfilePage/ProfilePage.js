import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
            <h1>Profile</h1>
        )
        // const classes = useStyles();
        // return (
        //     <Paper className={classes.root}>
        //         <Typography variant="h5" component="h3">
        //             This is a sheet of paper.
        //         </Typography>
        //         <Typography component="p">
        //             Paper can be used to build surface or other elements for your application.
        //         </Typography>
        //     </Paper>
        // )
    }
}
