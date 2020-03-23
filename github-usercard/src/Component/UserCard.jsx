import React from "react";
import Followers from "./Followers";

export default function UserCard(props) {
  const { user, followers } = props;
  console.log(user);
  return (
    <div className="userCard">
      <h3>{user.login}</h3>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>

      {user.followers > 0 ? <Followers followers={followers} /> : null}
    </div>
  );
}
