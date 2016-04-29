'use strict';
import GLOBAL from './global';

var Api = {

  store_access_token: function(access_token) {
    GLOBAL.ACCESS_TOKEN = access_token;
  },

  send_request: function (url, method, data) {
    const self = this;
    if (data) {
      data = JSON.stringify(data);
    }
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open(method || 'GET', url);
      if (GLOBAL.ACCESS_TOKEN) {
        request.setRequestHeader('Authorization', 'Bearer ' + GLOBAL.ACCESS_TOKEN);
      }
      else {
        const apiUrl = 'https://3zupc84zw0.execute-api.us-east-1.amazonaws.com/dev';
        const authLoginUrl = 'http://qa-sungard.sso.sungardas.io/service/oauth2/authorize?realm=SungardAS&scope=openid+profile+email+address+phone+cloud&redirect_uri=' + apiUrl + '/callback' + '&response_type=code&client_id=msaws';
        window.location = authLoginUrl;
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
        reject(request.status);
      };
      if (data) {
        request.send(data);
      } else {
        request.send();
      }
    });
  },
};
export default Api;
