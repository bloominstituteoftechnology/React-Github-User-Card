import React from "react";
import { Card } from "@material-ui/core";
import "./UserCard.css";

export default function UserCard({userData}) {

  return (
    <div className="cards">
      {/* figure out how to use <Card> */}
      <Card
        variant="elevation"
      >
        <div className="header">
          <img src={userData.avatar_url}/>
          <div className="userInfo">
            <h2 href={userData.url}>{userData.name}</h2>
            <h4>{userData.login}</h4>
          </div>
        </div>
        <div className="additional-info">
          <a href={userData.html_url}>{userData.html_url}</a>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      </Card>
    </div>
  )
}