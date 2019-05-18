import React from 'react';
import PropTypes from 'prop-types';

import { LeftNavigation } from './LeftNavigation';
import { SubmitDataContent } from './SubmitDataContent';
import AttentionImage from './attention.png';
import IdeaImage from './idea.png';
import PartyImage from './party.png';

import { defaultCategories } from './defaultCategories';

const activeCategories = [
  {
    name: 'Category Seven',
    id: 6,
  },
  {
    name: 'Category',
    id: 12,
  },
  {
    name: 'Category Thirteen',
    id: 13,
  },
]

const menuItems = [
  {
    title: 'Celebrate',
    key: 'celebrate',
    image: PartyImage,
  },
  {
    title: 'Ideas',
    key: 'ideas',
    image: IdeaImage,
  },
  {
    title: 'Concern',
    key: 'concerns',
    image: AttentionImage,
  },
];

const contentItems = [
  {
    title: 'Tell us what’s going great?',
    key: 'celebrate',
    categories: defaultCategories,
    image: PartyImage,
  },
  {
    title: 'How can we make work better?',
    key: 'ideas',
    categories: defaultCategories,
    image: IdeaImage,
  },
  {
    title: 'Get something of your choice?',
    key: 'concerns',
    categories: defaultCategories,
    image: AttentionImage,
  },
];

export const SubmitDataView = ({ match }) => {
  const { viewType } = match.params;
  const contentData = contentItems.find(item => item.key === viewType);
  const { title, image, categories } = contentData;
  return (
    <div>
      <LeftNavigation items={menuItems} activeItem={viewType} data={contentData} />
      <SubmitDataContent
        title={title}
        image={image}
        categories={categories}
        activeCategories={activeCategories}
        viewType={viewType}
      />
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


