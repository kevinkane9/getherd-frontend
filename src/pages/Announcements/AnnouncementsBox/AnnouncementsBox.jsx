import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar } from '../../../components/Avatar';

const Container = styled.div`
  box-shadow: 0 8px 11px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  border-radius: 15px;
  border-top-left-radius: 40px;
  margin: 15px;
  &.active {
    border: solid 1px #fd7313;
  }
  header {
    height: 90px;
    display: flex;
    .name-time {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
      h3.name {
        font-size: 24px;
        font-weight: 500;
        margin: 0px;
      }
      .time {
        opacity: 0.47;
        font-size: 12px;
      }
    }
    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 30px;
    }
  }
  .content {
    padding: 30px;
    line-height: 1.54;
    font-size: 18px;
  }
`;

export const AnnouncementsBox = ({ data }) => {
  return (
    <Container className={data.isActive ? 'active' : ''}>
      <header>
        <Avatar width={80} height={80} />
        <div className="name-time">
          <h3 className="name">{data.authorName}</h3>
          <span className="time">{data.time}</span>
        </div>
        <span className="icon-container">icon</span>
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

