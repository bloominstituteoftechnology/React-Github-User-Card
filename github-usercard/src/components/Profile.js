import React from "react";

const Profile = props => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <img style={{
        width: "40%",
        padding: "2%"
        }} 
        src={props.me.avatar_url} 
        alt="profile pic"
      />

      <h1>{props.me.name}'s Followers:</h1>        

    </div>
  )
}

export default Profile