import React from "react";

function User(props) {
  return (
    <div>
      <p key={Date.now()} className="user">
        <img src={props.user.avatar_url} alt={props.user.login} />
        <h2>{props.user.login}</h2>
        <h3>{props.user.followers} Followers:</h3>
        <br />
      </p>
    </div>
  );
}

export default User;
