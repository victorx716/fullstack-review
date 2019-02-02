const express = require('express');
var bodyParser = require('body-parser');

let app = express();

import getReposByUsername from '../helpers/github.js';
import save from '../database/index.js';


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  getReposByUsername(req.body.term, (err, data) => {
    if (err) {
      throw(err);
      return;
    } else {
      save(data);
    }
  });
  // res.status(200).send(req.body);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

