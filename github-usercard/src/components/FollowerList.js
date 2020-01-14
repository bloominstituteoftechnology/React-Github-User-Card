import React from "react";
import FollowerCard from "./FollowerCard"

const FollowerList = (props) => {
  console.log(`this is props in FollowerList`, props)
  return (
    <div style={{

      display: "grid", 
      flexWrap: "wrap", 
      gridGap: "1%",  
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))"
      ,
    }}>
      {props.followers.map(follower => (
        <FollowerCard 
          follower={follower}
          key={follower.id}/>

      ))}
    </div>
  )
}

export default FollowerList;