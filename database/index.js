const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  "id": Number,
  "name": String,
  "forks_count": Number,
  "repo_url": String,
  "description": String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos = JSON.parse(repos);

}

module.exports.save = save;