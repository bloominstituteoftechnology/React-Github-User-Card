import React from 'react';

const UsersCard = props => {
  return (
    <div>
      <img src={props.user.avatar_url} alt='users face' />
      <h4>Name: {props.user.name}</h4>
      <button>Followers: {props.user.followers}</button>
      <h4>Following: {props.user.following}</h4>
    </div>
  );
};
export default UsersCard;