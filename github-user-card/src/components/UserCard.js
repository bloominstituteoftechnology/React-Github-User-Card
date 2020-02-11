import React from "react";

const UserCard = props => {
  return (
    <div>
      <img src={props.UserData.avatar_url} />
      <h2>{props.UserData.name}</h2>
      <h3>{props.UserData.login}</h3>
      <p>followers: {props.UserData.followers}</p>
      <p>following: {props.UserData.following}</p>
      <p>bio: {props.UserData.bio}</p>
      <small>created: {props.UserData.created_at}</small>
    </div>
  );
};

export default UserCard;
