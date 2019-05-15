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

function MyVoice(props) {
    return (
        <SvgIcon {...props}>
            <g transform="translate(0.000000,34.000000) scale(0.100000,-0.100000)">
                <path d="M88 329 c-15 -8 -18 -25 -18 -99 0 -48 3 -95 6 -104 5 -13 25 -16
112 -16 101 0 107 -1 134 -27 l28 -27 0 26 c0 20 6 27 23 30 21 3 22 8 25 107
2 77 -1 107 -10 113 -19 11 -280 9 -300 -3z m80 -111 c3 -24 0 -28 -23 -28
-27 0 -41 20 -31 46 10 27 51 13 54 -18z m97 2 c0 -20 -6 -26 -27 -28 -24 -3
-28 0 -28 21 0 30 9 39 35 35 14 -2 20 -10 20 -28z m100 0 c0 -19 -6 -26 -24
-28 -29 -4 -43 15 -30 41 15 28 54 19 54 -13z"/>
                <path d="M6 174 c-12 -31 -6 -111 9 -124 8 -7 15 -19 15 -26 0 -18 14 -18 30
1 8 10 31 15 70 15 67 0 90 7 90 26 0 11 -16 14 -66 14 -89 0 -104 9 -104 65
0 37 -3 45 -19 45 -10 0 -22 -7 -25 -16z"/>
            </g>
        </SvgIcon>
    );
}

function SvgIcons(props) {
    const { classes } = props;
    return (
        <MyVoice className={classes.iconHover} viewBox='0 0 40 40' style={{ fontSize: 45 }}/>
    );
}

SvgIcons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SvgIcons);