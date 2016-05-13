
import React from 'react';
import Permission from './Permission';

const PermissionList = (permissionList) => {

  const users = permissionList.users
    .map((user) => <option key={user.id} value={user.id}>{user.email}</option>);

  const permissionNodes = permissionList.data
    .map((permission) =>
      <Permission key={permission.id} id={permission.id} name={permission.name} read={permission.read} create={permission.create} update={permission.update} del={permission.delete} changeHandler={ permissionList.checkboxChangeHandler } />
    );

  return (
    <div>
      <div>
        <span>
          <select name="user" value={permissionList.user} onChange={ permissionList.changeHandler } >
            <option value="">Select user...</option>
            {[...users]}
          </select>
        </span>
        &nbsp;&nbsp;
        <span>
          <select name="resource" value={permissionList.resource} onChange={ permissionList.changeHandler } >
            <option value="">Select resource...</option>
            <option value="account">Account</option>
            <option value="user">User</option>
          </select>
        </span>
        &nbsp;&nbsp;
        <span>
          <button className="small" onClick={ permissionList.submitHandler }>submit</button>
        </span>
      </div>
      <br/>
      <table className="permissionList">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Read</th>
            <th>Create</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {permissionNodes}
        </tbody>
      </table>
    </div>
  );
};

export default PermissionList;
