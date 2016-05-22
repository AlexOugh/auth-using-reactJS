'use strict';

var Api = {

  send_request: function (url, method, data) {
    const self = this;
    if (data) {
      data = JSON.stringify(data);
    }
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open(method || 'GET', url);
      request.setRequestHeader('Content-Type', 'application/json');
      const access_token = sessionStorage.getItem('access_token');
      if (access_token) {
        request.setRequestHeader('Authorization', 'Bearer ' + access_token);
      }
      else {
        //alert(window.location);
        sessionStorage.setItem('last_url', window.location);
        self.redirect_to_login();
        return;
      }
      request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
           var data = 'response' in request ? request.response : request.responseText;
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            console.error(e);
            reject(e);
          }
        } else {
          reject(request.response);
        }
      };
      request.onerror = function () {
        alert(request.status);
        //alert(window.location);
        sessionStorage.setItem('last_url', window.location);
        if (request.status == 0) {
          self.redirect_to_login();
          return;
        }
        reject(request.status);
      };
      if (data) {
        request.send(data);
      } else {
        request.send();
      }
    });
  },

  redirect_to_login: function () {
    const apiUrl = 'https://3zupc84zw0.execute-api.us-east-1.amazonaws.com/dev';
    //const apiUrl = "https://nlk7dcxhy2.execute-api.us-east-1.amazonaws.com/mysql";
    const authLoginUrl = 'http://qa-sungard.sso.sungardas.io/service/oauth2/authorize?realm=SungardAS&scope=openid+profile+email+address+phone+cloud&redirect_uri=' + apiUrl + '/callback' + '&response_type=code&client_id=msaws';
    //const authLoginUrl = 'http://qa-sungard.sso.sungardas.io/service/oauth2/authorize?realm=SungardAS&scope=openid+profile+email+address+phone+cloud&redirect_uri=' + apiUrl + '/callback-ractjs' + '&response_type=code&client_id=msaws';
    //const callbackUrl = 'http://localhost:3000/callback';
    //const authLoginUrl = 'http://qa-sungard.sso.sungardas.io/service/oauth2/authorize?realm=SungardAS&scope=openid+profile+email+address+phone+cloud&redirect_uri=' + callbackUrl + '&response_type=code&client_id=msaws';
    window.location = authLoginUrl;
  }
};

export default Api;
