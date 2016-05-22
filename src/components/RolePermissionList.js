
import React from 'react';
import RolePermission from './RolePermission';

const RolePermissionList = (rolePermissionList) => {

  const roles = rolePermissionList.roles
    .map((role) => <option key={role.id} value={role.id}>{role.name}</option>);

  const rolePermissionNodes = rolePermissionList.data
    .map((rolePermission) =>
      <RolePermission key={rolePermission.id} id={rolePermission.id} name={rolePermission.name} read={rolePermission.read} create={rolePermission.create} update={rolePermission.update} del={rolePermission.delete} changeHandler={ rolePermissionList.checkboxChangeHandler } />
    );

  return (
    <div>
      <div>
        <span>
          <select name="role" value={rolePermissionList.role} onChange={ rolePermissionList.changeHandler } >
            <option value="">Select role...</option>
            {[...roles]}
          </select>
        </span>
        &nbsp;&nbsp;
        <span>
          <select name="resource" value={rolePermissionList.resource} onChange={ rolePermissionList.changeHandler } >
            <option value="">Select resource...</option>
            <option value="account">Account</option>
            <option value="user">User</option>
          </select>
        </span>
        &nbsp;&nbsp;
        <span>
          <button className="small" onClick={ rolePermissionList.submitHandler }>submit</button>
        </span>
      </div>
      <br/>
      <table className="rolePermissionList">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Read</th>
            <th>Create</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {rolePermissionNodes}
        </tbody>
      </table>
    </div>
  );
};

export default RolePermissionList;
