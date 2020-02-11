import React from "react";
import FollowersCard from "./FollowersCard";
const FollowersList = props => {
  return (
    <div>
      {props.FollowersData.map(follower => {
        return <FollowersCard FollowersData={follower} />;
      })}
    </div>
  );
};
export default FollowersList;
