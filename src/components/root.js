import React from 'react';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from '../Theme';
import { Routes } from './Routes';
import { Header } from './Header';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    margin: 0 50px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  height: calc(100vh - 120px);
`;


export const Root = (props) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Layout>
        <Header />
        <Content>
          <Routes />
        </Content>
      </Layout>
    </MuiThemeProvider>
  );
}
