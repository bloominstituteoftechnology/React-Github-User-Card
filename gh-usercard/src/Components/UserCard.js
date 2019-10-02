import React from 'react';
import UserList from './UserList.js';

const UserCard = props => {
  console.log('UserCard Props', props);
  return (
    <div>
      <div>
        <div>
          <img src={props.user.avatar_url} />
          <div>User Login: {props.user.login}</div>
          <div>User Location: {props.user.location}</div>
          <p>User Following: {props.user.following}</p>
          <p>User Followers: {props.user.followers}</p>
        </div>

        <UserList user={props.user} followers={props.followers} />
      </div>
    </div>
  );
};

export default UserCard;