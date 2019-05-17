import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { SubmitDataView } from '../../pages/SubmitDataView';

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/submit/:viewType" component={SubmitDataView} />
    </>
  )
}


