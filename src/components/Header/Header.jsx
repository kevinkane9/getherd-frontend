import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { Logo } from '../Logo';
import HomeItem from '../app-header/menu/home-item';
import AnnouncementsItem from '../app-header/menu/announcements';
import IdeasItem from '../app-header/menu/ideas-item';
import MyvoiceItem from '../app-header/menu/my-voice-item';
import { Avatar } from '../Avatar';
import OutlinedChips from '../app-header/outlinedchips/outlinedchips';
import Fon from '../img/headerfon.png';

const styles = theme => ({
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

const StyledGrid = styled(Grid)`
  @media (max-width: 600px) {
    padding: 0px !important;
    padding-top: 0px !important;
  }
`;

const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .avatar-container {
    margin-left: 20px;
  }
`;


const StyledHeader = styled(Grid)`
  height: 120px;
  margin: 0px !important;
  width: 100% !important;
  @media (max-width: 599px) {
    height: 80px;
    padding-bottom: 10px;
    .avatar-container {
      padding-left: 0px;
      padding-right: 20px;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  .avatar-container {
    padding-left: 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const HeaderComponent = (props) => {
  const { classes } = props;
  return (
    <StyledHeader container spacing={24} className={classes.grid}>
      <Hidden xsDown>
        <Grid item xs={2} sm={2} md={3}>
          <LogoContainer><Logo /></LogoContainer>
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
          <MenuContainer>
            <Hidden xsDown>
              <StyledMenuItem><HomeItem /></StyledMenuItem>
              <StyledMenuItem><AnnouncementsItem /></StyledMenuItem>
              <StyledMenuItem><IdeasItem /></StyledMenuItem>
              <StyledMenuItem><MyvoiceItem /></StyledMenuItem>
            </Hidden>
            <Avatar width={40} height={40} />
            <img className={classes.fon} src={Fon}/>
          </MenuContainer>
        </StyledGrid>
    </StyledHeader>
  )
}

export const Header = withStyles(styles)(HeaderComponent);
