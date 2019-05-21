import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';

import { MobileView } from './MobileView';
import { DesctopView } from './DesctopView';

const Container = styled.div`
  margin-left: 17vw;
  border-top: 1px solid lightgray;
  width: calc(100% - 17vw);
  @media (max-width: 1100px) {
    width: calc(100% - 21vw);
    margin-left: 21vw;
  }
  @media (max-width: 1100px) {
    width: calc(100% - 21vw);
    margin-left: 21vw;
  }
  @media (max-width: 599px) {
    position: fixed;
    top: 0px;
    width: 100%;
    margin-left: 0;
    background-color: white;
    height: 100%;
    z-index: 4;
  }
`;

export const SubmitDataContent = (props) => {
  return (
    <Container>
      <Hidden xsDown>
        <DesctopView {...props} />
      </Hidden>
      <Hidden only={['sm','md','lg','xl']}>
        <MobileView {...props} />
      </Hidden>
    </Container>
  );
};