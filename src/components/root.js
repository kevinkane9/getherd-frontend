import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
import { Theme } from '../Theme';

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

const StyledPaper = styled(Paper)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const StyledMenuItem = styled.div`
    @media (max-width: 800px) {
        button {
            min-width: 30px;
            padding: 6px 6px;
            font-size: 13px;
        }
    }
    @media (max-width: 660px) {
        button {
            min-width: 20px;
            padding: 6px 4px;
            font-size: 12px;
        }
    }
`;

const StyledMobileTitle = styled(Grid)`
    padding-top: 0px !important;
`;

const StyledGrid = styled(Grid)`
    @media (max-width: 600px) {
        padding-top: 0px !important;
    }
`;

const StyledPaperMobile = styled(Paper)`
    @media (max-width: 600px) {
        padding-top: 0px !important;
    }
`;

function CenteredGrid(props) {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={Theme}>
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.grid}>
                <Hidden xsDown>
                   <Grid item xs={2} sm={2} md={3}>
                       <Paper className={classes.paper}>
                           <Logo />
                       </Paper>
                   </Grid>
                </Hidden>
                <Hidden only={['sm','md','lg','xl']}>
                    <StyledGrid item xs={2}>
                        <Paper className={classes.paper}>
                            <IconButton color="inherit" aria-label="Menu">
                                <MenuIcon className={classes.menu} />
                            </IconButton>
                        </Paper>
                    </StyledGrid>
                </Hidden>
                <StyledGrid item xs={8} sm={4} md={4}>
                    <Paper className={classes.paper}>
                        <OutlinedChips />
                    </Paper>
                </StyledGrid>
                <StyledGrid item xs={2} sm={6} md={5}>
                    <StyledPaper className={classes.paper}>
                        <Hidden xsDown>
                          <StyledMenuItem><HomeItem /></StyledMenuItem>
                          <StyledMenuItem><AnnouncementsItem /></StyledMenuItem>
                          <StyledMenuItem><IdeasItem /></StyledMenuItem>
                          <StyledMenuItem><MyvoiceItem /></StyledMenuItem>
                        </Hidden>
                        <ImageAvatars/>
                        <img className={classes.fon} src={Fon}/>
                    </StyledPaper>
                </StyledGrid>
            </Grid>
            <Hidden xsDown>
                <Grid container spacing={24} className={classes.grid}>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <BanerText/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                       <Paper className={classes.paper}></Paper>
                   </Grid>
                </Grid>
            </Hidden>
            <Hidden only={['sm','md','lg','xl']}>
                <StyledMobileTitle container spacing={24} className={classes.grid}>
                    <StyledMobileTitle item xs={12} sm={4}>
                        <StyledPaperMobile className={classes.paper}>
                            <BanerMobile/>
                        </StyledPaperMobile>
                    </StyledMobileTitle>
                </StyledMobileTitle>
            </Hidden>
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
        </MuiThemeProvider>
    );
}

CenteredGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);