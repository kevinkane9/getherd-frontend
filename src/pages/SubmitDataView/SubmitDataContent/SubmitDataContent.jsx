import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  h1.title {
    font-size: 40px;
    max-width: 420px;
    font-weight: 100;
  }
  img {
    width: 100px
  }
`;

const Container = styled.div`
  margin-left: 16vw;
  border-top: 1px solid lightgray;
`;

export const SubmitDataContent = ({ title, image, categories, activeCategories, viewType }) => {
  return (
    <Container>
      <Header>
        <h1 className="title">{title}</h1>
        <img src={image} alt={viewType}/>
      </Header>
    </Container>
  )
}

SubmitDataContent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  activeCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};

