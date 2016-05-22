
import React from 'react';

const RolePermission = ({ id, name, read, create, update, del, changeHandler }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td><input type="checkbox" name={id} checked={read} id="read" onChange={ changeHandler } /></td>
    <td><input type="checkbox" name={id} checked={create} id="create" onChange={ changeHandler } /></td>
    <td><input type="checkbox" name={id} checked={update} id="update" onChange={ changeHandler } /></td>
    <td><input type="checkbox" name={id} checked={del} id="delete" onChange={ changeHandler } /></td>
  </tr>
);

RolePermission.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
};

export default RolePermission;
