import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './containers/AboutContainer';
import AboutStatic from './containers/AboutContainerStatic';
import UserListContainer from './containers/UserListContainer';
import PermissionListContainer from './containers/PermissionListContainer';
import RolePermissionListContainer from './containers/RolePermissionListContainer';
import CommentListContainer from './containers/CommentListContainer';
import AccountListContainer from './containers/AccountListContainer';
import AwsTokenContainer from './containers/AwsTokenContainer';
import CallbackContainer from './containers/CallbackContainer';
import GoogleAuthContainer from './containers/GoogleAuthContainer';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/users" component={UserListContainer} />
      <Route path="/permissions" component={PermissionListContainer} />
      <Route path="/role-permissions" component={RolePermissionListContainer} />
      <Route path="/about-static" component={AboutStatic} />
      <Route path="/comments" component={CommentListContainer} />
      <Route path="/accounts" component={AccountListContainer} />
      <Route path="/aws-token" component={AwsTokenContainer} />
      <Route path="/callback" component={CallbackContainer} />
      <Route path="/google" component={GoogleAuthContainer} />
    </Route>
  </Router>), document.getElementById('content')
);
