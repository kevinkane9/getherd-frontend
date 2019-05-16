import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import image from '../firstImage.png';

const StyledGrid = styled(Grid)`
  height: 80px;
  padding-top: 16px;
  margin-left: 30px;
  padding-left: 20px;
  margin-right: 30px;
  padding-right: 20px;
  padding-bottom: 16px;
  a {
    text-decoration: none;
  }
`

export const MobileContentBox = ({ title, description, image }) => {
  const Container = styled(Paper)`
    background: url(${image}) no-repeat right;
    background-size: contain;
  `
  return (
    <Container elevation={1}>
      <StyledGrid item xs={6}>
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

MobileContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

