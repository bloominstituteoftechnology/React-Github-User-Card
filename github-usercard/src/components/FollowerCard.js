import React from "react";

const FollowerCard = (props) => {
  console.log(`this is props.user in FollowerCard`, props)

  return (
    <div style={{width: "1fr", border: "1px solid black"}}>   
      <img style={{width: "100%"}} src={props.follower.avatar_url} alt="profile pic" href="{props.follower.followers_url}"/>
      <div>
      <h2>{props.follower.login}</h2> 
      <h4>{props.follower.name}</h4>
      </div>
    </div>
  )
}


export default FollowerCard;