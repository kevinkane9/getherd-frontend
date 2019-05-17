import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledGrid = styled(Grid)`
  height: 80px;
  a {
    text-decoration: none;
    p {
      font-size: 12px;
    }
    h1 {
      font-size: 22px;
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
        font-size: 30px;
      }
      p {
        min-height: 35px;
        padding: 0px 10px;
        text-align: center;
      }
    }
  }
`

export const ContentBox = ({ title, description, image, imageMobile }) => {
  const Container = styled(Paper)`
    background: url(${image}) no-repeat right;
    background-size: contain;
    margin: 0px 30px;
    padding: 20px 16px;
    @media (min-width: 600px) {
      height: 250px;
      max-width: 250px;
      margin: 0 auto;
      background: url(${imageMobile}) no-repeat top;
      background-size: 65%;
      display: flex;
      flex-direction: column;
      box-shadow: none !important;
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
        <a href="/">
          <Typography variant="h5" component="h1" >
            {title}
          </Typography>
          <Typography component="p">
            {description}
          </Typography>
        </a>
      </StyledGrid>
    </Container>
  )
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageMobile: PropTypes.string.isRequired,
}

