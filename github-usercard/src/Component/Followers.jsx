import React from "react";

export default function Followers(props) {
  const { followers } = props;
  console.log(followers);
  return (
    <div className="followerCardContainer">
      <h3>Followers: </h3>
      {followers.map(follower => {
        return (
          <div className="followerCard">
            <div className="followerCard-left">
              <img src={follower.avatar_url} alt="Follower profile image" />
            </div>
            <div className="followerCard-right">
              <a href={follower.url}><h4>{follower.login}</h4></a>
            </div>
          </div>
        )
      })}
    </div>
  );
}
