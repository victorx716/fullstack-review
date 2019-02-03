import React from 'react';
import ReactDOM from 'react-dom';
import DisplayRepo from './DisplayRepo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.

    {props.repos.map(repo => 
      <DisplayRepo repo = {repo} />)}
  </div>
)

export default RepoList;


