import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
root: {
    flexGrow: 1,
},
grow: {
    flexGrow: 1,
},
menuButton: {
    marginLeft: -12,
    marginRight: 20,
},
};

function NavBar(props) {
const { classes } = props;
return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
            WELCOME TO CHICAGO ARRAY OF THINGS
        </Typography>
        {/* <NavLink exact to="/"><Button color="secondary">Home</Button></NavLink> */}
        <NavLink exact to="/"><Button color="secondary">Sign In</Button></NavLink>
        <NavLink to="/signup"><Button color="secondary">Sign Up</Button></NavLink>
        </Toolbar>
    </AppBar>
    </div>
);
}

NavBar.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);