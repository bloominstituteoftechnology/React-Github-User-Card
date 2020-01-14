import React from "react";

const FollowerCard = (props) => {
  console.log(`this is props.user in FollowerCard`, props)

  return (
    <div>
      
      {/* <img src={props.avatar_url} /> */}
      <h2>{props.follower.login}</h2>
    </div>
  )
}


export default FollowerCard;