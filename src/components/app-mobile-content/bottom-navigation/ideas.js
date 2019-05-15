import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
    icon: {
        margin: theme.spacing.unit * 2,
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
    },
});

function Ideas(props) {
    return (
        <SvgIcon {...props}>
            <g transform="translate(0.000000,43.000000) scale(0.100000,-0.100000)">
                <path d="M150 420 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
                <path d="M75 401 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"/>
                <path d="M226 401 c-4 -5 -2 -12 3 -15 5 -4 12 -2 15 3 4 5 2 12 -3 15 -5 4
-12 2 -15 -3z"/>
                <path d="M111 356 c-54 -30 -63 -85 -26 -164 14 -30 25 -60 25 -68 0 -10 13
-14 48 -14 l47 0 24 58 c13 31 26 76 28 99 4 37 1 46 -25 73 -34 33 -79 39
-121 16z"/>
                <path d="M26 353 c-11 -11 -6 -23 9 -23 8 0 15 4 15 9 0 13 -16 22 -24 14z"/>
                <path d="M277 354 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"/>
                <path d="M0 264 c0 -17 22 -14 28 4 2 7 -3 12 -12 12 -9 0 -16 -7 -16 -16z"/>
                <path d="M292 268 c6 -18 28 -21 28 -4 0 9 -7 16 -16 16 -9 0 -14 -5 -12 -12z"/>
                <path d="M22 201 c4 -13 18 -16 19 -4 0 4 -5 9 -11 12 -7 2 -11 -2 -8 -8z"/>
                <path d="M277 204 c-8 -8 1 -24 14 -24 5 0 9 7 9 15 0 15 -12 20 -23 9z"/>
                <path d="M115 90 c-3 -5 0 -13 8 -16 23 -8 82 0 82 11 0 14 -82 19 -90 5z"/>
                <path d="M125 30 c23 -25 47 -25 70 0 18 20 17 20 -35 20 -52 0 -53 0 -35 -20z"/>
            </g>
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <Ideas className={classes.iconHover} viewBox='0 0 40 40' style={{ fontSize: 45 }}/>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);