import React from "react";

const FollowerCard = (props) => {
  console.log(`this is props.user in FollowerCard`, props)

  return (
    <div style={{width: "30%", border: "1px solid black"}}>      
      <img style={{width: "80%"}} src={props.follower.avatar_url} alt="profile pic"/>
      <h2>{props.follower.login}</h2>
    </div>
  )
}


export default FollowerCard;