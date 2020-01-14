import React from "react";
import FollowerCard from "./FollowerCard"

const FollowerList = (props) => {
  console.log(`this is props in FollowerList`, props)
  return (
    <div>
      <FollowerCard followers={props.followers}/>
    </div>
  )
}

export default FollowerList;