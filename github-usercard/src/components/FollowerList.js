import React from "react";
import FollowerCard from "./FollowerCard"

const FollowerList = (props) => {
  console.log(`this is props in FollowerList`, props)
  return (
    <div style={{display: "grid", gridGap: "1%",  }}>
      {props.followers.map(follower => (
        <FollowerCard 
          follower={follower}
          key={follower.id}/>

      ))}
    </div>
  )
}

export default FollowerList;