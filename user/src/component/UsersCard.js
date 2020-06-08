import React from "react";
import FollowersCard from "./FollowersCard";

const UsersCard = (props) => {
  return (
    <div>
      <img src={props.user.avatar_url}></img>
      <p>Name: {props.user.name}</p>
      <p>Login: {props.user.login}</p>
      <p> Account Type : {props.user.type}</p>
      <button> Followers: {props.user.followers}</button>
      <p>Following: {props.user.following}</p>
    </div>
  );
};
export default UsersCard;
