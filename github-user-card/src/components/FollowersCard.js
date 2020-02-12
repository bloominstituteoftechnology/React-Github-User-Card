import React from "react";
//writing what the contents of the followers card is going to have
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
