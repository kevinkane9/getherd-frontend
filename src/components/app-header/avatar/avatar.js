import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Av from './1.jpg';

const styles  = theme => ({
    avatar: {
        margin: 10,
        width: 40,
        marginLeft: 30,
    },
    avatarMob: {
        [theme.breakpoints.only('xs')]: {
            margin: 10,
            width: 50,
            height: 50,
            marginLeft: -40,
        },
    }
});

function ImageAvatars(props) {
    const { classes } = props;
    return (
        <div>
           <Hidden xsDown>
           <a href='#'>
             <Avatar alt="Remy Sharp" src={Av} className={classes.avatar} />
           </a>
           </Hidden>
           <Hidden only={['sm','md','lg','xl']}>
           <a href='#'>
             <Avatar alt="Remy Sharp" src={Av} className={classes.avatarMob} />
           </a>
           </Hidden>
        </div>
    );
}

ImageAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);