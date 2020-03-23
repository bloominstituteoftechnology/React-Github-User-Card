import React from "react";

export default function UserCard(props) {
  const { user, followers } = props;
  console.log(user);
  return (
    <div className="userCard">
      <h3>{user.login}</h3>
      <p>Following: {user.following}</p>
      <p>Followers: {user.followers}</p>
    </div>
  );
}
