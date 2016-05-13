import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>App Title</h1>
      <Link to="/users">Users</Link>
      <Link to="/permissions">Permissions</Link>
      <Link to="/accounts">Accounts</Link>
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
