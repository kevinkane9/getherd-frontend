import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import MaterialAvatar from '@material-ui/core/Avatar';

import DefaultAvatar from './defaultAvatar.jpg';

export const Avatar = ({ width, height }) => {
  const StyledAvatar = styled(MaterialAvatar)`
    width: ${width}px !important;
    height: ${height}px !important;
  `;
  return (
    <div className="avatar-container">
      <a href='#'>
        <StyledAvatar alt="Remy Sharp" src={DefaultAvatar} />
      </a>
    </div>
  )
};

Avatar.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

Avatar.defaultProps = {
  width: 35,
  height: 35,
};

