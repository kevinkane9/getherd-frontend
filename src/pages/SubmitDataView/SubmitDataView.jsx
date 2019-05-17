import React from 'react';
import PropTypes from 'prop-types';

import { LeftNavigation } from './LeftNavigation';

const menuItems = [
  {
    title: 'Celebrate',
    key: 'celebrate',
  },
  {
    title: 'Ideas',
    key: 'ideas',
  },
  {
    title: 'Concerns',
    key: 'concerns',
  },
];

export const SubmitDataView = ({ match }) => {
  const { viewType } = match.params;
  return (
    <div>
      <LeftNavigation items={menuItems} activeItem={viewType} />
    </div>
  )
}

SubmitDataView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      viewType: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}


