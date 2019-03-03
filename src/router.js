import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './containers/Main';

export default (
  <Router>
    <div>
      <Route exact path={'/'} component={Main}/>
      <Route path={'/faceDetector'} component={Main}/>
    </div>
  </Router>
);
