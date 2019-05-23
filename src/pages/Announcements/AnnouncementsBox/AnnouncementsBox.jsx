import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnnouncementsIcon } from '../../../components/SvgIcons/AnnouncementsIcon'

import { Avatar } from '../../../components/Avatar';

const Container = styled.div`
  box-shadow: 0 8px 11px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  border-radius: 15px;
  border-top-left-radius: 32px;
  margin: 10px;
  header {
    height: 70px;
    display: flex;
    .name-time {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
      h3.name {
        font-size: 20px;
        font-weight: 500;
        margin: 0px;
      }
      .time {
        opacity: 0.47;
        font-size: 11px;
      }
    }
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      width: 30px;
      height: 30px;
      background-color: #dedede;
      border-radius: 50%;
      padding: 5px;
      margin-top: 10px;
      svg {
        color: white;
      }
    }
  }
  &.active {
    border: solid 1px #fd7313;
    header .icon-container {
      background-color: #fd7313;
    }
  }
  .content {
    padding: 5px 15px;
    line-height: 1.4;
    font-size: 14px;
  }
`;

export const AnnouncementsBox = ({ data }) => {
  return (
    <Container className={data.isActive ? 'active' : ''}>
      <header>
        <Avatar width={60} height={60} />
        <div className="name-time">
          <h3 className="name">{data.authorName}</h3>
          <span className="time">{data.time}</span>
        </div>
        <span className="icon-container">
          <AnnouncementsIcon />
        </span>
      </header>
      <div className="content">
        {data.text}
      </div>
    </Container>
  )
}

AnnouncementsBox.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.string,
    authorName: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
}

export default AnnouncementsBox

