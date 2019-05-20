import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import Switcher from '../../../../components/app-header/outlinedchips/outlinedchips.js';
import { Avatar } from '../../../../components/Avatar';
import { Categories } from '../../Categories';
import CompleteBackground from './completeBackground.png';

const Content = styled.div`
  padding: 0px;
  height: 100%;
  textarea {
    height: 100%;
    width: 100%;
    resize: none;
    font-size: 23px;
    line-height: 1.22;
    opacity: 0.4;
    padding: 30px;
    background-color: #f8f8f8;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    border-radius: 50%;
    padding: 15px;
    position: fixed;
    bottom: 70px;
    right: 25px;
    svg {
      color: white;
      font-size: 40px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    position: fixed;
  }
`;

const Header = styled.header`
  background-color: #fd7313;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  .close {
    color: white;
    width: 40px;
    height: 40px;
  }
  .back {
    color: white;
    width: 30px;
    height: 30px;
  }
  .category-title {
    color: white;
    font-size: 28px;
  }
  &.category-header {
    justify-content: space-between;
  }
}`;

const ToolBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: white;
`;

export const MobileView = ({ categories, activeCategories }) => {
  const [step, setStep] = useState(1);

  const onSetStep = stepToSet => setStep(stepToSet);

  if (step === 1) {
    return (
      <>
        <Header>
          <Link to="/"><CloseIcon className="close" /></Link>
          <Switcher />
          <Avatar width={50} height={50} />
        </Header>
        <Content>
          <textarea placeholder="What’s happening?" name="text"></textarea>
          <Button variant="contained" color="primary" onClick={() => onSetStep(2)}>
            <CheckIcon />
          </Button>
          <ToolBox />
        </Content>
      </>
    )
  }
  if (step === 2) {
    return (
      <>
        <Header className="category-header">
          <ArrowBackIcon className="back" onClick={() => onSetStep(1)} />
          <span class="category-title">Pick a category</span>
          <Avatar width={50} height={50} />
        </Header>
        <Content>
          <Categories categories={categories} selectedCategories={activeCategories} />
          <Button variant="contained" color="primary" onClick={() => onSetStep(3)}>
            <CheckIcon />
          </Button>
        </Content>
      </>
    )
  }
  if (step === 3) {
    return (
      <Content>
        <Link to="/">
          <img src={CompleteBackground} alt="complete" />
        </Link>
      </Content>
    )
  }
}

MobileView.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  activeCategories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
};
