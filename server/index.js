const express = require('express');
var bodyParser = require('body-parser');

let app = express();

var getReposByUsername = require('../helpers/github.js').getReposByUsername;
var getterRepos = require('../database/index.js').getterRepos;

var save = require('../database/index.js').save;


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
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
});


app.get('/repos', function (req, res) {
   console.log('WOK');
  
  // TODO - your code here!
  // This route should send back the top 25 repos
   getterRepos((err, data) => {
     if(err){
       res.status(404).send();
     }
     res.status(200).send(data);
   })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


