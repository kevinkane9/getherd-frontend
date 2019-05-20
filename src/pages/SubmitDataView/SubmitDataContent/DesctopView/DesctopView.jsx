import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import { Categories } from '../../Categories';

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
    width: 80px
  }
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledPaper = styled(Paper)`
  border-radius: 14px !important;
  height: 40vh;
  overflow: auto;
`;

const Content = styled.div`
  padding: 20px 40px;
  textarea {
    width: 100%;
    height: 99%
    resize: none;
    border: none;
    font-size: 24px;
    color: black;
    opacity: 0.39;
    padding: 40px;
    background-color: #fcfcfc;
    font-weight: 300;
    box-sizing: border-box;
  }
  textarea:focus {
    outline: none;
  }
  .categories-container {
    h3 {
      opacity: 0.43;
      text-align: center;
      padding-top: 24px;
      margin: 0px;
      font-size: 19px;
      font-weight: 300;
    }
  }
`;

const BottomBox = styled(Grid)`
  text-align: center;
  width: 100%;
  padding-top: 50px;
  button {
    margin: 20px auto;
    color: white;
    border-radius: 47px;
    padding: 10px 30px;
    font-size: 24px;
    text-transform: none;
    font-weight: 300;
    svg {
      margin-left: 20px;
      width: 30px;
      height: 30px;
    }
  }
`;


export const DesctopView = ({ image, title, viewType, categories, activeCategories }) => {
  return (
    <>
      <Header>
        <h1 className="title">{title}</h1>
        <img src={image} alt={viewType}/>
      </Header>
      <Content>
        <StyledGrid container spacing={24}>
          <StyledGrid item xs={12} sm={8}>
            <StyledPaper elevation={1}>
              <textarea placeholder="Type here.." name="text"></textarea>
            </StyledPaper>
          </StyledGrid>
            <StyledGrid item xs={4}>
              <StyledPaper className="categories-container">
                <h3>Pick any 3 labels</h3>
                <Categories categories={categories} selectedCategories={activeCategories} />
              </StyledPaper>
            </StyledGrid>
        </StyledGrid>
        <BottomBox>
          <Button variant="contained" color="primary">
            <span>Submit</span>&nbsp;
            <CheckIcon />
          </Button>
        </BottomBox>
      </Content>
    </>
  )
}

DesctopView.propTypes = {
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
