import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Switch from '@material-ui/core/Switch';
import Fedora from './fedora.png';
import FedoraBlue from './fedoraBlue.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px #020241;
  border-radius: 30px;
  color: #020241;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: center;
  .nowrap {
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
    height: 25px;
  }
  p {
    padding: 0 10px;
    white-space: nowrap;
  }
  &.mobile {
    background-color: #fc8736;
    border: none;
    padding: 0 15px;
    p {
      color: white;
      margin-left: 10px;
    }
  }
  @media (max-width: 1100px) {
    padding: 0 10px;
    img {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 14px;
      padding: 0 5px;
    }
    .switcher {
      width: 45px;
      > span {
        width: 30px;
      }
    }
  }
  @media (max-width: 800px) and (min-width: 600px) {
    padding: 0 5px;
    img {
      width: 15px;
      height: 15px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const IncognitoSwitcher = () => {
  return (
    <>
      <Hidden xsDown>
        <Container>
          <div className="nowrap">
            <img src={FedoraBlue} alt="fedora"/>
            <p>Go Incognito</p>
          </div>
          <Switch className="switcher" color="secondary"/>
        </Container>
      </Hidden>
      <Hidden only={['sm','md','lg','xl']}>
        <Container className="mobile">
          <div className="nowrap">
            <img src={Fedora} alt="fedora"/>
            <p className="white">Go Incognito</p>
          </div>
          <Switch color="default" />
        </Container>
      </Hidden>
    </>
  )
}
