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

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <g transform="translate(0.000000,39.000000) scale(0.100000,-0.100000)">
                <path d="M97 301 c-70 -68 -89 -93 -83 -107 6 -15 21 -4 94 69 48 48 92 87 97
87 5 0 49 -39 97 -87 71 -71 88 -84 94 -69 5 12 -3 27 -25 50 -22 23 -31 41
-31 66 0 19 -4 41 -9 49 -12 18 -31 5 -31 -22 0 -19 -2 -19 -32 10 -60 56 -71
53 -171 -46z"/>
                <path d="M127 222 c-67 -67 -67 -68 -67 -124 0 -47 4 -59 22 -72 12 -9 35 -16
50 -16 27 0 28 2 28 55 l0 55 45 0 45 0 0 -55 c0 -53 1 -55 28 -55 15 0 38 7
50 16 18 13 22 25 22 74 l0 58 -74 66 c-40 36 -75 66 -77 66 -3 0 -35 -30 -72
-68z"/>
            </g>
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
            <HomeIcon className={classes.iconHover} viewBox='0 0 40 40' style={{ fontSize: 45 }}/>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);