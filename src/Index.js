import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './containers/AboutContainer';
import AboutStatic from './containers/AboutContainerStatic';
import UserContainer from './containers/UserContainer';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/user" component={UserContainer} />
      <Route path="/about-static" component={AboutStatic} />
    </Route>
  </Router>), document.getElementById('content')
);
