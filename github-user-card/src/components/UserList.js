import React from "react";
import UserCard from "./UserCard";
import "./UserList.css";

export default function UserList(props) {

  console.log(props.userData)

  return (
    <div className="card-container">
      {props.userData.map(user => (
        <UserCard key={user.id} userData={user} />
      ))}
    </div>
  )
}