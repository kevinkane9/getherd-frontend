import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './app-header/logo/logo';
import HomeItem from './app-header/menu/home-item';
import AnnouncementsItem from './app-header/menu/announcements';
import IdeasItem from './app-header/menu/ideas-item';
import MyvoiceItem from './app-header/menu/my-voice-item';
import ImageAvatars from './app-header/avatar/avatar';
import OutlinedChips from './app-header/outlinedchips/outlinedchips';
import Fon from './img/headerfon.png';
import Row from './img/row.png';

import BanerText from './app-baner/banerText';
import BanerMobile from './app-baner-mobile/banermobile';

import LeftBox from './app-content/leftBox/leftBox';
import CenterBox from './app-content/centerBox/centerBox';
import RightBox from './app-content/rightBox/rightBox';

import FirstBox from './app-mobile-content/firstBox/firstBox';
import SecondBox from './app-mobile-content/secondBox/secondBox';
import ThirdBox from './app-mobile-content/thirdBox/thirdBox';
import LabelBottomNavigation from './app-mobile-content/bottom-navigation/bottom-navigation';

const styles = theme => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
    },
    grid: {
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#fd7313',
         },
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: 'none',
        background: 'none',
        display: 'flex',
    },
    fon: {
        position: 'fixed',
        zIndex: '-1',
        top: '-250px',
        overflow: 'hidden',
        backgroundSize: 'contain',
        left: '490px',
    },
    row: {
        cursor: 'pointer',
        margin: '0 auto',
    },
    menu: {
        color: '#fff',
    }
});
function CenteredGrid(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.grid}>
                <Hidden xsDown>
                   <Grid item xs={12} sm={5}>
                       <Paper className={classes.paper}>
                           <Logo />
                       </Paper>
                   </Grid>
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <Grid item xs={2} >
                        <Paper className={classes.paper}>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon className={classes.menu} />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Hidden>
                <Grid item xs={8} sm={2}>
                    <Paper className={classes.paper}>
                        <OutlinedChips />
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={5}>
                    <Paper className={classes.paper}>
                        <Hidden smDown>
                          <HomeItem />
                          <AnnouncementsItem />
                          <IdeasItem />
                          <MyvoiceItem />
                        </Hidden>
                        <ImageAvatars/>
                        <img className={classes.fon} src={Fon}/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={24} className={classes.grid}>
                <Grid item xs={12} sm={4}>
                    <Hidden xsDown>
                        <Paper className={classes.paper}>
                            <BanerText/>
                        </Paper>
                    </Hidden>
                    <Hidden only={['sm','md','lg','xl']}>
                        <Paper className={classes.paper}>
                            <BanerMobile/>
                        </Paper>
                    </Hidden>
                </Grid>
                <Hidden xsDown>
                   <Grid item xs={12} sm={8}>
                       <Paper className={classes.paper}></Paper>
                   </Grid>
                </Hidden>
            </Grid>
            <Grid container spacing={24}>
                <Hidden xsDown>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <LeftBox />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <CenterBox />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <RightBox />
                    </Paper>
                </Grid>
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <Grid item xs={12}>
                        <FirstBox />
                    </Grid>
                    <Grid item xs={12}>
                        <SecondBox />
                    </Grid>
                    <Grid item xs={12}>
                        <ThirdBox />
                    </Grid>
                </Hidden>
            </Grid>
            <Grid container spacing={24}>
                <Hidden xsDown>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>
                        <img className={classes.row} src={Row}/>
                    </Paper>
                </Grid>
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <Grid item xs={12} sm={12}>
                        <LabelBottomNavigation/>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);