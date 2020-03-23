import React from "react";
import UserCard from "./UserCard";

export default function UserCardContainer(props) {
  return (
    <div className="userCardContainer">
      <UserCard user={props.user} followers={props.followers} />
    </div>
  );
}
