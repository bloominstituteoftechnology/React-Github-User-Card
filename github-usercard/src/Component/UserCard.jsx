import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function UserCard(props) {
  const { user, contributions } = props;
  return (
    <div className="userCard">
      <div className="userCard-top">
        <div className="userCard-left">
          <div className="imgContainer">
            <img src={user.avatar_url} alt="Github user profile" />
          </div>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <p>@{user.login}</p>
          </a>
        </div>
        <div className="userCard-right">
          <div className="userInfo-top">
            <h4>
              {user.name} - {user.location}
            </h4>
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

      <div className="userCard-bottom">
        <div id="graph">{ReactHtmlParser(contributions)}</div>
      </div>
    </div>
  );
}
