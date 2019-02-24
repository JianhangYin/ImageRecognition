import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import faceDetector from './containers/faceDetector';

export default (
  <Router>
    <div>
      <Route exact path={'/'} component={faceDetector}/>
      <Route path={'/:swiperType'} component={faceDetector}/>
    </div>
  </Router>
);
