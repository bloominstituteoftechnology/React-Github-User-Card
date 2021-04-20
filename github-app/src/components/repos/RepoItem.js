import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
<<<<<<< HEAD
    return (
    <div className='card'>
        <h3>
        <a href={repo.html_url}>{repo.name}</a>
        </h3>
    </div>
);
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
=======
  return (
    <div className='card'>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
>>>>>>> ff05c00adb6749a8c38f91ea720c239e6ebc17b9
};

export default RepoItem;