import React from "react";

const FollowerCard = (props) => {
  console.log(`this is props.user in FollowerCard`, props.followers)

  return (
    <div>
      
      {/* <img src={props.avatar_url} /> */}
      <h2>{props.followers[0]}</h2>
    </div>
  )
}


export default FollowerCard;