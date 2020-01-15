import React from "react";
import FollowerCard from "./FollowerCard";
// import gitroot from "./gitimage.png";

const FollowerList = ({ followers }) => {
  
  return (
    <div style={{
      display: "grid", 
      flexWrap: "wrap", 
      gridGap: "1%",  
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      padding: "2%",
      overflow: "auto",
    }}>
      {followers.map(follower => (
        <FollowerCard 
          follower={follower}
          key={follower.id}/>
      ))}
    </div>
  )
}

export default FollowerList;