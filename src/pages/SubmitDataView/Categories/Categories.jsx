import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TileIcon from './tile.png';
import TileWhiteIcon from './tilewhite.png';

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: center;
  .category {
    border-radius: 28px;
    border: solid 1px #fd7313;
    background-color: rgba(253, 115, 19, 0.08);
    padding: 8px 15px;
    font-size: 13px;
    margin: 5px;
    font-weight: 100;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      width: 10px;
      height: 10px;
    }
  }
  .category.active {
    background-color: #fd7313;
    color: white;
  }
  @media (max-width: 600px) {
    .category {
      padding: 10px 18px;
      font-size: 14px;
    }
  }
`;

export const Categories = (props) => {
  const [selectedCategories, setSelectedCategories] = useState(props.selectedCategories);

  const onSetCategory = (category, isActive) => {
    if (isActive) {
      const filteredCategories = selectedCategories.filter(c => c.id !== category.id);
      setSelectedCategories(filteredCategories);
      return;
    }
    setSelectedCategories([...selectedCategories, category]);
  }

  return (
    <Container>
      {
        props.categories.map(category => {
          const isActive = selectedCategories.find(c => c.id === category.id);
          return (
            <span key={category.id} onClick={() => onSetCategory(category, isActive)} className={`category ${isActive ? 'active' : ''}`}>
              <img src={isActive ? TileWhiteIcon : TileIcon} alt="tile"/>
              {category.name}
            </span>
          )
        })
      }
    </Container>
  )
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
}

