import React from "react";

const FollowerCard = ({ follower }) => {
  const {
    avatar_url,
    login,
    name,
    html_url, 
    bio,
    public_repos

  } = follower

  return (
    <div style={{width: "1fr", border: "1px solid black", backgroundColor: "white"}}>   
      <a href={html_url} target="__blank"><img style={{width: "100%"}} src={avatar_url} alt="profile pic" /></a>
      <div>
      <h4>{name}</h4>
      <p>{bio}</p>        
      <p>Repos: {public_repos}</p>
      <h1>{login}'s Followers:</h1>
      </div>
    </div>
  )
}

export default FollowerCard;