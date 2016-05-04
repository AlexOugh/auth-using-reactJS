import React from 'react';
import GoogleAuth from '../components/GoogleAuth';

class GoogleAuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fullName: null,
      givenName: null,
      familyName: null,
      imageUrl: null,
      email: null,
      idToken: null
    };
  }

  /*componentDidMount() {
    gapi.signin2.render('g-signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 200,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
  }*/


  onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());*/

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    //console.log("ID Token: " + id_token);
    this.setState({
      id: profile.getId(),
      fullName: profile.getName(),
      givenName: profile.getGivenName(),
      familyName: profile.getFamilyName(),
      imageUrl: profile.getImageUrl(),
      email: profile.getEmail(),
      idToken: id_token
    });


/*    //var AWS = require('aws-sdk');
    var cognitoidentity = new AWS.CognitoIdentity({region:'us-east-1'});

    var params = {
      IdentityPoolId: 'us-east-1:7f161902-6524-4c40-87bb-f1b4e983fd19',
      AccountId: '089476987273',
      Logins: {
        'accounts.google.com': id_token
      }
    };
    cognitoidentity.getId(params, function(err, data) {
      if (err) console.log(err, err.stack);
      else {
        console.log(data);
        identityId = data.IdentityId;

        var params = {
          IdentityId: identityId,
          Logins: {
            'accounts.google.com': id_token
          }
        };
        cognitoidentity.getCredentialsForIdentity(params, function(err, data) {
          if (err) console.log(err, err.stack);
          else {
            console.log(data);

            console.log(data.Credentials.AccessKeyId);
            console.log(data.Credentials.SecretKey);
            console.log(data.Credentials.SessionToken);
          }
        });
      }
    });*/
  }

  onSignOut() {
    window.open('https://www.google.com/accounts/Logout', '_logout', 'width=500,height=600');
    this.setState({
      id: null,
      fullName: null,
      givenName: null,
      familyName: null,
      imageUrl: null,
      email: null,
      idToken: null
    });
    window.location = '/';
  }


  /*render() {
    return <div className='g-signin2'></div>;
  }*/

  renderGoogleLoginButton() {
    console.log('rendering google signin button');
    let signInHanler = this.onSignIn.bind(this);
    gapi.signin2.render('signin2', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      //'width': 200,
      //'height': 50,
      //'longtitle': true,
      //'theme': 'dark',
      'onsuccess': signInHanler
    })
  }

  componentDidMount() {
    //window.addEventListener('google-loaded', this.renderGoogleLoginButton);
    this.renderGoogleLoginButton();
  }

  render() {
    let signOutHanler = this.onSignOut.bind(this);
    return (<GoogleAuth id={this.state.id} fullName={this.state.fullName} givenName={this.state.givenName}
         familyName={this.state.familyName} imageUrl={this.state.imageUrl} email={this.state.email}
         idToken={this.state.idToken} signOutHanler={signOutHanler} />);
  }
}

export default GoogleAuthContainer;
