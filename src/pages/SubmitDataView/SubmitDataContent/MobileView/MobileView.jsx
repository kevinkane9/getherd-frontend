import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import { IncognitoSwitcher } from '../../../../components/IncognitoSwitcher';
import { Avatar } from '../../../../components/Avatar';
import { Categories } from '../../Categories';
import CompleteBackground from './completeBackground.png';
import GalleryImage from './gallery.png';
import GifImage from './gif.png';
import PlusImage from './plus.png';

const Content = styled.div`
  padding: 0px;
  height: 100%;
  background-color: #f8f8f8;
  textarea {
    height: calc(100% - 180px);
    width: 100%;
    resize: none;
    font-size: 23px;
    line-height: 1.22;
    opacity: 0.4;
    padding: 30px;
    background-color: #f8f8f8;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    overflow: auto;
    outline: none;
    border: none;
  }
  button {
    border-radius: 50%;
    padding: 10px;
    position: fixed;
    bottom: 30px;
    right: 25px;
    min-width: 0px;
    &.no-bottom-box {
      bottom: 20px;
    }
    svg {
      color: white;
      font-size: 25px;
    }
  }
  img.fullscreen-img {
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    position: fixed;
  }
`;

const Header = styled.header`
  background-color: #fd7313;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  z-index: 3;
  .switcher-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
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
    font-size: 24px;
  }
  &.category-header {
    justify-content: space-between;
  }
}`;

const ToolBox = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: white;
  .content-container {
    display: flex;
    align-items: center;
    padding: 0px 30px;
    height: 100%;
    img:first-child {
      margin-right: 20px;
    }
    img:last-child {
      margin-left: auto;
    }
  }
`;

export const MobileView = ({ categories, activeCategories }) => {
  const [step, setStep] = useState(1);

  const onSetStep = stepToSet => setStep(stepToSet);

  if (step === 1) {
    return (
      <>
        <Header>
          <Link to="/"><CloseIcon className="close" /></Link>
          <div className="switcher-container">
            <IncognitoSwitcher />
          </div>
          <Avatar width={50} height={50} />
        </Header>
        <Content>
          <textarea placeholder="What???s happening?" name="text"></textarea>
          <Button variant="contained" color="primary" onClick={() => onSetStep(2)}>
            <CheckIcon />
          </Button>
        </Content>
      </>
    )
  }
  if (step === 2) {
    return (
      <>
        <Header className="category-header">
          <ArrowBackIcon className="back" onClick={() => onSetStep(1)} />
          <span className="category-title">Pick a category</span>
          <Avatar width={50} height={50} />
        </Header>
        <Content>
          <Categories categories={categories} selectedCategories={activeCategories} />
          <Button variant="contained" color="primary" onClick={() => onSetStep(3)} className="no-bottom-box">
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
          <img className="fullscreen-img" src={CompleteBackground} alt="complete" />
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
