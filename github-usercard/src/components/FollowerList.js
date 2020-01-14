import React from "react";
import FollowerCard from "./FollowerCard"

const FollowerList = (props) => {
  console.log(`this is props in FollowerList`, props)
  return (
    <div>
      {props.followers.map(follower => (
        <FollowerCard follower={follower}/>

      ))}
    </div>
  )
}

export default FollowerList;