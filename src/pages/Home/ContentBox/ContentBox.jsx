import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const StyledGrid = styled(Grid)`
  height: 80px;
  a {
    text-decoration: none;
    p {
      font-size: 12px;
    }
    h1 {
      font-size: 20px;
      font-weight: 500;
    }
  }
  @media (min-width: 601px) {
    a {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      align-items: center;
      h1 {
        font-size: 26px;
      }
      p {
        min-height: 35px;
        padding: 0px 10px;
        text-align: center;
      }
    }
  }
  @media (max-height: 700px) {
    height: 50px;
  }
`

export const ContentBox = ({ title, description, image, imageMobile, link }) => {
  const Container = styled(Paper)`
    background: url(${image}) no-repeat right;
    background-size: contain;
    background-color: white;
    margin: 0px 30px;
    padding: 20px 16px;
    z-index: 1;

    @media (min-width: 600px) {
      height: 215px;
      max-width: 200px;
      margin: 0 auto;
      background: url(${imageMobile}) no-repeat top;
      background-size: 60%;
      display: flex;
      flex-direction: column;
      box-shadow: none !important;
      background-color: transparent !important;
    }
    @media (max-width: 800px) and (min-width: 601px) {
      height: 180px;
      max-width: 250px;
      margin: 0 auto;
      background: url(${imageMobile}) no-repeat top;
      background-size: 50%;
      display: flex;
      flex-direction: column;
      box-shadow: none !important;
    }
  `
  return (
    <Container elevation={1}>
      <StyledGrid item xs={6} sm={12}>
        <Link to={link}>
          <Typography variant="h5" component="h1" >
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </Link>
      </StyledGrid>
    </Container>
  )
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

