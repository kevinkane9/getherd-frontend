import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

import { Logo } from '../../../components/Logo';


const Container = styled(Paper)`
  position: fixed;
  height: 100%;
  top: 0px;
  width: 16vw;
  @media (max-width: 1100px) {
    width: 20vw;
  }
  ul {
    list-style: none;
    padding-left: 0px;
    li {
      a {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
      }
      height: 70px;
      padding-left: 30px;
      margin-top: 15px;
      img {
        width: 40px;
        margin-right: 15px;
      }
      .title {
        font-size: 16px;
        font-weight: 300;
      }
    }
    li:first-child {
      margin-top: 30px;
    }
    li.active {
      background-color: #fff9f5;
      font-weight: 400;
      border-left: 6px solid #fd7313;
      padding-left: 24px;
    }
  }
  @media (max-width: 850px) {
    ul {
      li {
        padding-left: 20px;
        a img {
          width: 20px;
          margin-right: 5px;
        }
        a .title {
          font-size: 12px;
        }
      }
      li.active {
        border-left: 4px solid #fd7313;
        padding-left: 16px;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  padding-left: 30px;
  align-items: center;
  height: 120px;
  background-color: #ffede0;
  @media (max-width: 850px) {
    padding-left: 20px;
  }
`;

export const LeftNavigation = ({ items, activeItem }) => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ul>
        {
          items.map(item => {
            const isActive = item.key === activeItem;
            return (
              <li key={item.key} className={isActive ? 'active' : ''}>
                <Link to={`/submit/${item.key}`}>
                  <img src={item.image} alt={item.title}/>
                  <span className="title">{item.title}</span>
                </Link>
              </li>
            )
          })
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

