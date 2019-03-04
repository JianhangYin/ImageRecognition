import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './containers/Main';

export default (
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path={'/'} component={Main}/>
  </Router>
);
