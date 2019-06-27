import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';

import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
      width: '100%'
    },
});

export default function MenuBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
      <div class = "Nab bar fixed">
        <nav class="navbar navbar-expand-md fixed-bottom">

          <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                  setValue(newValue);
              }}
              showLabels
              className={classes.root}
          >
              <Link to='/'>
              <BottomNavigationAction icon={
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                      <SvgIcon>
                          <path fill="#000000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
                      </SvgIcon>
                  </IconButton>
              } />
              </Link>
              <Link to='/profile'>
              <BottomNavigationAction icon={
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                      <SvgIcon>
                          <path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />                        </SvgIcon>
                  </IconButton>
              } />
              </Link>
              
              <BottomNavigationAction icon={
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                      <SvgIcon>
                          <path  fill="#000000" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"/>
                      </SvgIcon>
                  </IconButton>
              } />
              <BottomNavigationAction icon={
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                      <SvgIcon>
                          <path fill="#000000" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />                        </SvgIcon>
                  </IconButton>
              } />
              </BottomNavigation>
          </nav>
        </div>
    );
}
