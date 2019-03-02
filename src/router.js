import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FaceDetector from './containers/FaceDetector';

export default (
  <Router>
    <div>
      <Route exact path={'/'} component={FaceDetector}/>
      <Route path={'/faceDetector'} component={FaceDetector}/>
    </div>
  </Router>
);
