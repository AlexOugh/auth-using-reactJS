
import React from 'react';

const Account = ({ id, name, desc }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{desc}</td>
  </tr>
);

Account.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired
};

export default Account;
