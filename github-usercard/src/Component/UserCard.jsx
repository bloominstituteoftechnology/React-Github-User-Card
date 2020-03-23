import React from "react";

export default function UserCard(props) {
  const { user, followers } = props;
  console.log(user);
  return (
    <div className="userCard">
      <div className="userCard-left">
        <div className="imgContainer">
          <img src={user.avatar_url} alt="User image" />
        </div>
        <a href={user.url}><p>@{user.login}</p></a>
      </div>
      <div className="userCard-right">
        <div className="userInfo-top">
          <h4>{user.name} - {user.location}</h4>
        </div>
        <div className="userInfo-middle">
          <p>Bio: {user.bio}</p>
          <p>Repos: {user.public_repos}</p>
        </div>
        <div className="userInfo-bottom">
          <button>Following</button>
          <button>Followers</button>
        </div>

      </div>
    </div>
  );
}
