import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const Container = styled.div`
  margin-left: 16vw;
  border-top: 1px solid lightgray;
`;

const StyledGrid = styled(Grid)`
  height: 100%;
`;

const StyledPaper = styled(Paper)`
  height: 100%;
  border-radius: 14px !important;
`;

const Content = styled.div`
  padding: 20px 40px;
  height: 500px;
  textarea {
    width: 100%;
    height: 99%
    resize: none;
    border: none;
    font-size: 24px;
    color: black;
    opacity: 0.39;
    padding: 40px;
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
    .categories {
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
      }
      .category.active {
        background-color: #fd7313;
        color: white;
      }
    }
  }
`;

export const SubmitDataContent = ({ title, image, categories, activeCategories, viewType }) => {
  return (
    <Container>
      <Header>
        <h1 className="title">{title}</h1>
        <img src={image} alt={viewType}/>
      </Header>
      <Content>
        <StyledGrid container spacing={24}>
          <StyledGrid item xs={8}>
            <StyledPaper elevation={1}>
              <textarea placeholder="Type here.." name="text"></textarea>
            </StyledPaper>
          </StyledGrid>
          <StyledGrid item xs={4}>
            <StyledPaper className="categories-container">
              <h3>Pick any 3 labels</h3>
              <div className="categories">
                {
                  categories.map(category => {
                    const isActive = activeCategories.find(c => c.id === category.id);
                    return (
                      <span className={`category ${isActive ? 'active' : ''}`}>
                        {category.name}
                      </span>
                    )
                  })
                }
              </div>
            </StyledPaper>
          </StyledGrid>
        </StyledGrid>
      </Content>

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

