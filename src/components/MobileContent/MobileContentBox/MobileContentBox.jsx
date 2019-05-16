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
`

export const MobileContentBox = ({ title, description, image }) => {
  const Container = styled(Paper)`
    background: url(${image}) no-repeat right;
    background-size: contain;
    margin: 0px 30px;
    padding: 20px 16px;
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

