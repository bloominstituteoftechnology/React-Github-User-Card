import React from "react";

const Profile = ({ me }) => {
  
  const {
    avatar_url,
    login,
    name,
    html_url, 
    bio,
    public_repos
  } = me
  
  return (
    <div style={{padding: "1%", backgroundColor: "gray"}}>
    <a href={html_url} target="__blank"><img src={avatar_url} alt="profile pic" /></a>
      <h4>{name}</h4>
      <p>{bio}</p>        
      <p>Repos: {public_repos}</p>
      <h1>{login}'s Followers:</h1>
    </div>
  )
}

export default Profile