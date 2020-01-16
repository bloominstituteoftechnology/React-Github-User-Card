import React from "react";

const FollowerCard = props => {
  return (
    <div className="follower-card">
      <img src={props.img} alt={props.login} width="40%"></img>
      <p>{props.login}</p>
    </div>
  );
};

export default FollowerCard;
