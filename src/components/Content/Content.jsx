import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';

import CelebrateImageMobile from './celebrateMobile.png';
import IdeasImageMobile from './ideaMobile.png';
import ConcernsImageMobile from './concernsMobile.png';
import CelebrateImage from './celebrate.png';
import IdeasImage from './idea.png';
import ConcernsImage from './concerns.png';

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
    height: 100px;
    top: 80px;
    background: #fd7313;
    z-index: -1;
    -moz-border-radius: 100px / 50px;
    -webkit-border-radius: 100px / 50px;
    border-radius: 100px / 30px;
  }
  .right {
    right: 0px;
  }
`;

export const Content = () => {
  return (
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
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ContentBox
          title="Ideas"
          description="Share your ideas with us"
          image={IdeasImageMobile}
          imageMobile={IdeasImage}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ContentBox
          title="Concerns"
          description="Share your concerns with us"
          image={ConcernsImageMobile}
          imageMobile={ConcernsImage}
        />
      </Grid>
    </Container>
  )
};