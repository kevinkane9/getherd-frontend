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

function Announcements(props) {
    return (
        <SvgIcon {...props}>
            <g transform="translate(0.000000,43.000000) scale(0.100000,-0.100000)">
                <path d="M253 414 c-3 -8 -1 -20 6 -27 8 -8 11 -4 11 16 0 30 -7 35 -17 11z"/>
                <path d="M164 409 c-4 -7 32 -50 84 -102 68 -68 94 -88 108 -83 15 6 1 23 -76
101 -52 52 -98 95 -102 95 -4 0 -10 -5 -14 -11z"/>
                <path d="M315 380 c-10 -11 -14 -20 -8 -20 5 0 18 9 28 20 10 11 14 20 8 20
-5 0 -18 -9 -28 -20z"/>
                <path d="M128 292 l-27 -57 38 -39 39 -39 57 28 56 28 -68 69 c-37 37 -68 68
-68 67 0 0 -12 -26 -27 -57z"/>
                <path d="M330 320 c0 -5 9 -10 20 -10 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0
-20 -4 -20 -10z"/>
                <path d="M37 172 c-34 -35 -34 -50 -2 -85 33 -35 44 -34 83 6 l32 33 -38 37
c-21 20 -40 37 -43 37 -3 0 -17 -13 -32 -28z m73 -27 c0 -12 -28 -35 -44 -35
-8 0 -7 35 1 43 12 13 43 7 43 -8z"/>
                <path d="M216 115 c9 -23 -15 -48 -33 -33 -11 9 -17 8 -29 -4 -13 -13 -11 -18
21 -43 26 -19 40 -24 47 -17 8 8 8 15 -1 26 -10 12 -10 19 2 37 15 21 13 49
-4 49 -4 0 -6 -7 -3 -15z"/>
            </g>
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <Announcements className={classes.iconHover} viewBox='0 0 40 40' style={{ fontSize: 45 }}/>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);