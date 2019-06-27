import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        width: "70%",
        "padding-left": "15%",
        "padding-right": "15%"
    },
});

export default function MenuBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction icon={<HomeIcon />} />
            <BottomNavigationAction icon={<FavoriteIcon />} />
            <BottomNavigationAction icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}
