import React from "react";

const UserCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.login}</h3>
      <p>followers: {props.followers}</p>
      <p>following: {props.following}</p>
      <p>bio: {props.bio}</p>
      <small>created: {props.created_at}</small>
    </div>
  );
};

export default UserCard;
