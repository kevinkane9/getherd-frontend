import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { AnnouncementsIcon } from '../SvgIcons/AnnouncementsIcon';
import { HomeIcon } from '../SvgIcons/HomeIcon';
import { IdeasIcon } from '../SvgIcons/IdeasIcon';
import { MyVoiceIcon } from '../SvgIcons/MyVoiceIcon';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.16);
  a.menu-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #bababa;
    text-decoration: none;
    font-weight: 100;
    .text {
      font-size: 12px;
      padding-top: 5px;
    }
    &.active {
      color: #fd7313;
    }
  }
`;

const menuItems = [
  { title: 'Home', icon: <HomeIcon />,  pathname: '/' },
  { title: 'Announcements', icon: <AnnouncementsIcon />, pathname: '/announcements' },
  { title: 'Ideas', icon: <IdeasIcon />, pathname: '/ideas' },
  { title: 'My Voice', icon: <MyVoiceIcon />, pathname: '/my-voice' },
]

export const BottomNavigation = ({ active }) => {
  return (
    <Container>
      {
        menuItems.map(({ pathname, title, icon }) => (
          <Link
            to={pathname}
            className={`menu-item ${active === title ? 'active' : ''}`}
          >
            {icon}
            <span className="text">
              {title}
            </span>
          </Link>
        ))
      }
    </Container>
  )
}

BottomNavigation.propTypes = {
  active: PropTypes.string.isRequired,
}
