import React from "react";

export default function Followers(props) {
  const { followers } = props;
  return (
    <div className="followerCardContainer">
      <h3>Followers: {followers.length}</h3>
      {followers.map(follower => {
        return (
          <div className="followerCard">
            <div className="followerCard-left">
              <img src={follower.avatar_url} alt="Follower profile" />
            </div>
            <div className="followerCard-right">
              <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
                <h4>@{follower.login}</h4>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
