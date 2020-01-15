import React from "react";

const Profile = ({ me }) => {
  
  const {
    avatar_url,
    login,
    name,
    html_url
  } = me
  
  return (
    <div style={{padding: "1%", backgroundColor: "gray"}}>
    <a href={html_url} target="__blank"><img src={avatar_url} alt="profile pic" /></a>
      <h4>{login}</h4>
      <h1>{name}'s Followers:</h1>        
    </div>
  )
}

export default Profile