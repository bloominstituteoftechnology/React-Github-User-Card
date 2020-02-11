import React from "react";

const FollowersCard = props => {
  return (
    <div className="FollowersCard">
      <img src={props.FollowersData.avatar_url} />
      <h3>{props.FollowersData.login}</h3>
      <p>followers: {props.FollowersData.followers_url}</p>
    </div>
  );
};

export default FollowersCard;
