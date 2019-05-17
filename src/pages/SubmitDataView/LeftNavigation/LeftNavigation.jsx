import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

import { Logo } from '../../../components/Logo';
import { Certificate } from 'crypto';


const Container = styled(Paper)`
  position: fixed;
  height: 100%;
  top: 0px;
  width: 220px;
  ul {
    list-style: none;
    padding-left: 0px;
    li {
      height: 80px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #ffede0;
`;

export const LeftNavigation = ({ items, activeItem }) => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ul>
        {
          items.map(item => (
            <li key={item.key}>{item.title}</li>
          ))
        }
      </ul>
    </Container>
  )
}

LeftNavigation.propTypes = {
  activeItem: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })).isRequired,
}

