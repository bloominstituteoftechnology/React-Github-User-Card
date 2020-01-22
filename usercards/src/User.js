import React from "react";

const User=({user})=>{
  return(
    <div>
    <img src={user.avatar_url}/>>
    <h2>{user.name}</h2>
    <a href={user.html_url} alt="url"> My Github Profile</a>
    <p className="bio">{user.bio}</p>
   </div>
  )
}


export default User;
