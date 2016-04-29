import React from 'react';

const User = ({ name, age }) => (
  <div className="user">
    <h2>User: {name} </h2>
    <h3>Age: {age} </h3>
  </div>
);

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.string.isRequired
};

export default User;
