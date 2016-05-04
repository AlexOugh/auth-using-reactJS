import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>App Title</h1>
      <Link to="/user">User</Link>
      <Link to="/about">About 1</Link>
      <Link to="/about-static">About 2</Link>
      <Link to="/comments">Comments</Link>
      <Link to="/aws-token">AWS Token</Link>
      <Link to="/google">Google Auth</Link>
    </header>
    <section>
      {children || 'Welcome to the app'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
