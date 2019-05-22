import React from 'react';
import { Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { SubmitDataView } from '../../pages/SubmitDataView';
import { Announcements } from '../../pages/Announcements';
import { Ideas } from '../../pages/Ideas';
import { MyVoice } from '../../pages/MyVoice';

export const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/submit/:viewType" component={SubmitDataView} />
      <Route exact path="/announcements" component={Announcements} />
      <Route exact path="/ideas" component={Ideas} />
      <Route exact path="/my-voice" component={MyVoice} />
    </>
  )
}


