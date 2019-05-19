import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
  justify-content: center;
  .category {
    border-radius: 28px;
    border: solid 1px #fd7313;
    background-color: rgba(253, 115, 19, 0.08);
    padding: 8px 20px;
    font-size: 9px;
    margin: 5px;
    font-weight: 100;
    cursor: pointer;
    user-select: none;
  }
  .category.active {
    background-color: #fd7313;
    color: white;
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
            <span onClick={() => onSetCategory(category, isActive)} className={`category ${isActive ? 'active' : ''}`}>
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

