'use strict';
import cookie from 'react-cookie';

// use this to preserve a URL fragment across switch to 2f site
function storeUrl(url) {
  cookie.save('stored_url', url, { maxAge: 300, path:'/' });
}

function storeAndDisplayUrl(url, window) {
  storeUrl(url);
  window.location = url;
}


/**
   * This is the generic function used for fetching data from any API endpoint
   * It take two parameters api endpoint and a callback function
  */
function getRemoteData(apiEndPoint, reqBody, cb) {
	fetch(apiEndPoint, reqBody)
	.then((response) => {
	  return response.json();
	})
	.then((output) => {
	  cb(output);
	})
	.catch(function displayError(error) {
	  cb({ output: {name: 'Request Failed: ' + error}});
	});
}

var utils = {
  storeUrl: storeUrl,
  storeAndDisplayUrl: storeAndDisplayUrl,
  getRemoteData: getRemoteData
};



module.exports = utils;
