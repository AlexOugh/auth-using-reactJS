
import React from 'react';
import User from './User';

const UserList = (userList) => {
  const userNodes = userList.data
    .map((user) =>
      <User family_name={user.family_name} key={user.id} id={user.id} email={user.email} given_name={user.given_name} />
    );
  return (
    <table className="userList">
      <tr>
        <th>ID</th>
        <th>Email Address</th>
        <th>Family Name</th>
        <th>Given Name</th>
      </tr>
      {userNodes}
    </table>
  );
};

export default UserList;
