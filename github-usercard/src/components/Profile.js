import React from "react";

const Profile = ({ me }) => {
  
  const {
    avatar_url,
    login,
    name
  } = me
  
  return (
    <div style={{padding: "1%", backgroundColor: "gray"}}>
      <img src={avatar_url} alt="profile pic" />
      <h4>{login}</h4>
      <h1>{name}'s Followers:</h1>        
    </div>
  )
}

export default Profile