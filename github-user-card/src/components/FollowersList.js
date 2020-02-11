import React from "react";
import FollowersCard from "./FollowersCard";
const FollowersList = props => {
  return (
    <div className="indFollower">
      {props.FollowersData.map(follower => {
        return <FollowersCard FollowersData={follower} />;
      })}
    </div>
  );
};
export default FollowersList;
