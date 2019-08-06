import React from "react";

export default function UserCard({ person }) {
  return (
    <div className="user-box">
      <img src={person.avatar_url} alt="fun pic" />
      <h1>{person.login}</h1>
      <h4>{person.location}</h4>
    </div>
  );
}
