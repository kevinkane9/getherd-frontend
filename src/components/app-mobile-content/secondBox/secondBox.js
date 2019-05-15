import './secondBox.css';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SecondImage from './secondimage.png';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: '20px',
        paddingRight: '20px',
        marginLeft: '30px',
        marginRight: '30px',
        background: `url(`+SecondImage+`) no-repeat right`,
        height: '170px',
    },
    link: {
        textDecoration: 'none',
    },
    h1:{
        fontSize: '45px',
    }
});

function SecondBox(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Grid item xs={6}>
                   <a href="/" className={classes.link}>
                     <Typography variant="h5" component="h1" className={classes.h1}>
                         Ideas
                     </Typography>
                     <Typography component="p">
                         Share your ideas with us.
                     </Typography>
                   </a>
                </Grid>
            </Paper>
        </div>
    );
}

SecondBox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondBox);