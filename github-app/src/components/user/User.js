import React, {useEffect} from "react";
import PropTypes from 'prop-types'

const User = ({ user, loading, getUser, GetUserRepos, repos, match }) => {
  useEffect(() => {
   getUser(match.prams.login);
   GetUserRepos(match.prams.login)
  }, []);

  return (
    <div>
      <img src={user.avatar_url} />><h2>{user.name}</h2>
      <a href={user.html_url} alt="url">
        {" "}
        My Github Profile
      </a>
      <p className="bio">{user.bio}</p>
    </div>
  );
};

User.PropTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  GetUserRepos: PropTypes.func.isRequired,

}

export default User;
