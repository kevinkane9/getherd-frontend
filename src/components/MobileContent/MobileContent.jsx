import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import FirstImage from './firstImage.png';
import SecondImage from './secondimage.png';
import ThirdImage from './thirdimage.png';

import { MobileContentBox } from './MobileContentBox';

const Container = styled.div`
  padding-bottom: 30px;
  width: 100%;
  > div {
    margin-top: 20px;
  }
`;

const Ovals = styled.div`
  .left, .right {
    width: 270px;
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

export const MobileContent = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Ovals>
          <div className='left'></div>
          <div className='right'></div>
        </Ovals>
        <MobileContentBox
          title="Celebrate"
          description="Let us know if there is something to celebrate"
          image={FirstImage}
        />
      </Grid>
      <Grid item xs={12}>
        <MobileContentBox
          title="Ideas"
          description="Share your ideas with us"
          image={SecondImage}
        />
      </Grid>
      <Grid item xs={12}>
        <MobileContentBox
          title="Concerns"
          description="Share your concerns with us"
          image={ThirdImage}
        />
      </Grid>
    </Container>
  )
};

