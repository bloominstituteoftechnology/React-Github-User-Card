import React from "react";

const FollowersCard = (props) => {
  return (
    <div>
      <h1>Followers:</h1>
      <img src={props.followers.avatar_url}></img>
      <p>Name: {props.followers.name}</p>
      <p>Login: {props.followers.login}</p>
      <p> Account Type : {props.followers.type}</p>
    </div>
  );
};
export default FollowersCard;
