import React from 'react';

const User = ({ id, email, family_name, given_name }) => (
  <tr>
    <td>{id}</td>
    <td>{email}</td>
    <td>{family_name}</td>
    <td>{given_name}</td>
  </tr>
);

User.propTypes = {
  id: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  family_name: React.PropTypes.string.isRequired,
  given_name: React.PropTypes.string.isRequired
};

export default User;
