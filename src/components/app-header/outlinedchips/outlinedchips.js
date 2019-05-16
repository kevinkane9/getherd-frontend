import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';
import Switch from '@material-ui/core/Switch';
import Fedora from './fedora.png';

class Switches extends React.Component {
    state = {
        checkedA: true,
        checkedB: true,
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        return (
                <Switch defaultChecked value="checkedF" color="default" />
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
    },
    image: {
        width: '26px',
        height: '25px',
        margin: '12px 9px',
    },
    desc: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        border: '1px solid #020241',
        color: '#020241',
        borderRadius: '25px',
        margin: '5px auto',
    },
    mob:{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #fc8736',
        background: '#fc8736',
        borderRadius: '25px',
        margin: '5px auto',
    },
    p: {
        color: '#fff',
        fontSize: '12px',
        marginTop: '17px',
    }
});

function handleDelete() {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

const StyledSwicherContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 800px) {
        p {
            font-size: 12px;
        }
        img {
            width: 20px;
            height: 19px;
            margin: 7px 6px;
        }
    }
`;

const StyledSwicherMobContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 15px;
    height: 40px;
    p {
        font-size: 12px;
        opacity: 0.7;
    }
    img {
        width: 17px;
        height: 16px;
        margin: 7px 6px;
    }
    
`;



function OutlinedChips(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Hidden xsDown>
                <StyledSwicherContainer className={classes.desc}>
                    <img className={classes.image} src={Fedora}/>
                    <p>Go Incognito</p>
                    <Switch/>
                </StyledSwicherContainer>
            </Hidden>
            <Hidden only={['sm','md','lg','xl']}>
                <StyledSwicherMobContainer className={classes.mob}>
                    <img className={classes.image} src={Fedora}/>
                    <p className={classes.p}>Go Incognito</p>
                    <Switch  color="primary"/>
                </StyledSwicherMobContainer>
            </Hidden>
        </div>
    );
}

OutlinedChips.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedChips);