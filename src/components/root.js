import React from 'react';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from '../Theme';
import { Routes } from './Routes';
import { Header } from './Header';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
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
