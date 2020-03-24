import React from "react";
import UserCard from "./UserCard";
import Followers from "./Followers";

export default function UserCardContainer(props) {
  return (
    <div className="userCardContainer">
      <UserCard
        user={props.user}
        followers={props.followers}
        contributions={props.contributions}
      />
      {props.user.followers > 0 ? (
        <Followers followers={props.followers} />
      ) : null}
    </div>
  );
}
