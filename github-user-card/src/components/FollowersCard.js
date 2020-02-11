import React from "react";

const FollowersCard = props => {
  return (
    <div>
      <img src={props.Follower.avatar_url} />
      <h2>{props.Follower.name}</h2>
      <h3>{props.Follower.login}</h3>
      <p>followers: {props.Follower.followers}</p>
      <p>following: {props.Follower.following}</p>
      <p>bio: {props.Follower.bio}</p>
      <small>created: {props.Follower.created_at}</small>
    </div>
  );
};

export default FollowersCard;
