const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://www.api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    } else {
      if (!error && response.statusCode === 200) {
        var repos = JSON.parse(body);
        console.log(repos);
        callback(null, repos);
      }
    }
  }
}

module.exports.getReposByUsername = getReposByUsername;