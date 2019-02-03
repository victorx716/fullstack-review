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

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repos = JSON.stringify(repos);
  console.log('WHAT TYPE OF DATA IS THIS!!!!!!!', typeof repos)
  console.log('ARE YOU EVEN AN ARAY?', Array.isArray(repos))
  console.log('IS THIS PARSED', typeof JSON.parse(repos));
  repos = JSON.parse(repos);
  console.log('LETS TEST SOME STUFF', repos[0].id)
  console.log('LETS TEST SOME STUFF', repos[0].name)
  console.log('LETS TEST SOME STUFF', repos[0].forks_count)
  console.log('LETS TEST SOME STUFF', repos[0].owner.repos_url)
  console.log('LETS TEST SOME STUFF', repos[0].description)

  repos.forEach((story) => {
    var story = new Repo({
      id: story.id,
      name: story.name,
      forks_count: story.forks_count,
      repo_url: story.owner.repos_url,
      description: story.description
    })

    story.save((err) => {
      if (err) {
        console.log(err);
        return;
      }

    })
  })

}

module.exports.save = save;
