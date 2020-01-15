import React from "react";

const FollowerCard = ({ follower }) => {
  const {
    login,
    name,
    avatar_url
  } = follower

  return (
    <div style={{width: "1fr", border: "1px solid black", backgroundColor: "white"}}>   
      <img style={{width: "100%"}} src={avatar_url} alt="profile pic" />
      <div>
      <h2>{login}</h2> 
      <h4>{name}</h4>
      </div>
    </div>
  )
}

export default FollowerCard;