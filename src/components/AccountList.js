
import React from 'react';
import Account from './Account';

const AccountList = (accountList) => {
  const accountNodes = accountList.data
    .map((account) =>
      <Account name={account.name} key={account.id} id={account.id} text={account.desc} />
    );
  return (
    <table className="accountList">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Desc</th>
      </tr>
      {accountNodes}
    </table>
  );
};

export default AccountList;
