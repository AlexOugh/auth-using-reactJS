
import React from 'react';

const GoogleAuth = ({ id, fullName, givenName, familyName, imageUrl, email, idToken, signOutHanler }) => (
  <div>
    <div className='g-signin2' id='signin2' data-theme='dark'/>
    <div className='profile'>
      <ul>
        <li>Id : { id }</li>
        <li>Full Name: { fullName }</li>
        <li>Given Name: { givenName }</li>
        <li>Family Name: { familyName }</li>
        <li><img src={ imageUrl }/></li>
        <li>Email : { email }</li>
        <li>Token : { idToken }</li>
      </ul>
    </div>
    <div>
      <a href="#" onClick={ signOutHanler } >Sign Out</a>
    </div>
  </div>
);

GoogleAuth.propTypes = {
  id: React.PropTypes.string.isRequired,
  fullName: React.PropTypes.string.isRequired,
  givenName: React.PropTypes.string.isRequired,
  familyName: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  idToken: React.PropTypes.string.isRequired,
  signOutHanler: React.PropTypes.func
};

export default GoogleAuth;
