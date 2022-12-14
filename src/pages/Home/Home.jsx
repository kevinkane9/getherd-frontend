import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import CelebrateImageMobile from './celebrateMobile.png';
import IdeasImageMobile from './ideaMobile.png';
import ConcernsImageMobile from './concernsMobile.png';
import CelebrateImage from './celebrate.png';
import IdeasImage from './idea.png';
import ConcernsImage from './concerns.png';
import BanerText from '../../components/app-baner/banerText';
import BanerMobile from '../../components/app-baner-mobile/banermobile';
import Row from '../../components/img/row.png';
import FonImage from './headerfon.png'
import { BottomNavigation } from '../../components/BottomNavigation';

import { ContentBox } from './ContentBox';
const Container = styled.div`
  padding-bottom: 30px;
  width: 100%;
  > div {
    margin-top: 20px;
  }
  @media (min-width: 601px) {
    display: flex;
  }
`;

const Ovals = styled.div`
  .left, .right {
    width: 320px;
    position: absolute;
    height: 150px;
    top: -45px;
    background: #fd7313;
    z-index: -1;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 30px;
    z-index: -1;
  }
  .right {
    right: 0px;
  }
`;

const StyledRow = styled.div`
  position: fixed;
  bottom: 15px;
  width: 100%;
  left: 0px;
  text-align: center;
`;

const StyledMobileTitle = styled(Grid)`
  padding-top: 0px !important;
  margin: 0px !important;
  width: 100% !important;
`;


const StyledPaperMobile = styled(Paper)`
  @media (max-width: 600px) {
    padding-top: 10px !important;
    padding-bottom: 0px !important;
  }
`;

const StickedBottom = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

const StyledGrid = styled(Grid)`
  margin: 0px !important;
  width: 100% !important;
`;

const HomeContainer = styled.div`
  position: relative;
  img.fon {
    position: absolute;
    top: -100px;
    right: 0;
    z-index: -1;
    width: 60vw;
  }
`;

const Content = styled.div`
  overflow: auto;
  height: calc(100vh - 100px);
`;

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    background: 'none',
    display: 'flex',
  },
});

const HomeComponent = ({ classes }) => {
  return (
    <HomeContainer>
      <Hidden xsDown><img className="fon" src={FonImage} alt="fon"/></Hidden>
      <Content>
      <Hidden xsDown>
        <StyledGrid container spacing={24} className={classes.grid}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <BanerText/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}></Paper>
          </Grid>
        </StyledGrid>
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
      <StyledGrid container spacing={24}>
        <Container>
          <Grid item xs={12} sm={4}>
            <Hidden only={['sm','md','lg','xl']}>
              <Ovals>
                <div className='left'></div>
                <div className='right'></div>
              </Ovals>
            </Hidden>
            <ContentBox
              title="Celebrate"
              description="Let us know if there is something to celebrate"
              image={CelebrateImageMobile}
              imageMobile={CelebrateImage}
              link="/submit/celebrate"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContentBox
              title="Ideas"
              description="Share your ideas with us"
              image={IdeasImageMobile}
              imageMobile={IdeasImage}
              link="/submit/ideas"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContentBox
              title="Concerns"
              description="Share your concerns with us"
              image={ConcernsImageMobile}
              imageMobile={ConcernsImage}
              link="/submit/concerns"
            />
          </Grid>
        </Container>
      </StyledGrid>
      <Hidden xsDown>
        <StyledRow><img src={Row} alt="row" /></StyledRow>
      </Hidden>
      <Hidden only={['sm','md','lg','xl']}>
        <StickedBottom>
          <BottomNavigation active="Home" />
        </StickedBottom>
      </Hidden>
      </Content>
    </HomeContainer>
  )
};

export const Home = withStyles(styles)(HomeComponent);