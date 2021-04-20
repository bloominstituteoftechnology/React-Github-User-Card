import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
<<<<<<< HEAD
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;
=======
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
>>>>>>> ff05c00adb6749a8c38f91ea720c239e6ebc17b9
