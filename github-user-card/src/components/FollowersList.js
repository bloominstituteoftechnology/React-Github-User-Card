import React from "react";
import FollowersCard from "./FollowersCard";
//mapping through the data so that it can reflect each follower
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
