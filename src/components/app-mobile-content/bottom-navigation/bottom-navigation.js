import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Homeicon from './home-icon';
import Announcements from './announcements'
import Ideas from './ideas';
import MyVoice from './support'

const styles = {
    root: {
        width: '100%',
        height: 100,
        paddingBottom: '2%',
        color: '#9d9d9d',
        boxShadow:'0px -4px 23px -4px rgba(0,0,0,0.5)',
    }
};

class LabelBottomNavigation extends React.Component {
    state = {
        value: 'home',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    wrapper = {
        color: 'red'
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <BottomNavigation showLabels={true} value={value} onChange={this.handleChange} className={classes.root}>
                <BottomNavigationAction label="Home" value="home" icon={<Homeicon/>}  />
                <BottomNavigationAction label="Announcements" value="favorites" icon={<Announcements />} />
                <BottomNavigationAction label="Ideas" value="nearby" icon={<Ideas />} />
                <BottomNavigationAction label="My Voice" value="folder" icon={<MyVoice />} />
            </BottomNavigation>
        );
    }
}

LabelBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);