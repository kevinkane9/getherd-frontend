import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Avatar } from '../Avatar';
import { IncognitoSwitcher } from '../IncognitoSwitcher';

const Container = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0px 20px;
  z-index: 2;
  div.header-item {
    padding: 0px 10px;
    &.switcher-container {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      padding-right: 100px;
    }
  }
  div.header-item:first-child {
    .menu-icon {
      color: white;
      width: 30px;
      height: 30px;
    }
  }
  div.header-item:last-child {
    display: flex;
    align-items: center;
    .avatar-container {
      padding-left: 10px;
    }
  }
  @media (max-width: 1200px) {
    div.header-item.switcher-container {
      padding-right: initial;
      justify-content: center;
    }
  }
  @media (max-width: 800px) {
    padding: 0px 5px;
    div.header-item {
      padding: 0px 5px;
    }
  }
  @media (max-width: 599px) {
    background-color: #fd7313;
    height: 75px;
  }
`;



export const Header = (props) => {
  return (
    <Container>
      <div className="header-item">
        <Hidden xsDown><Logo /></Hidden>
        <Hidden only={['sm','md','lg','xl']}>
          <MenuIcon className="menu-icon" />
        </Hidden>
      </div>
      <div className="header-item switcher-container">
        <IncognitoSwitcher />
      </div>
      <div className="header-item">
        <Hidden xsDown><Menu /></Hidden>
        <Avatar width={40} height={40} />
      </div>
    </Container>
  )
}

