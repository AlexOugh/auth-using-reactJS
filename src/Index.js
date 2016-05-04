import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './containers/AboutContainer';
import AboutStatic from './containers/AboutContainerStatic';
import UserContainer from './containers/UserContainer';
import CommentListContainer from './containers/CommentListContainer';
import AwsTokenContainer from './containers/AwsTokenContainer';
import CallbackContainer from './containers/CallbackContainer';
import GoogleAuthContainer from './containers/GoogleAuthContainer';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/user" component={UserContainer} />
      <Route path="/about-static" component={AboutStatic} />
      <Route path="/comments" component={CommentListContainer} />
      <Route path="/aws-token" component={AwsTokenContainer} />
      <Route path="/callback" component={CallbackContainer} />
      <Route path="/google" component={GoogleAuthContainer} />
    </Route>
  </Router>), document.getElementById('content')
);
