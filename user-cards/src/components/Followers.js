import React from "react";
import "./componentStyles.css";

function Followers(props) {
  return (
    <>
      {props.followers.map((follower) => (
        <div key={follower.id} className="info">
          <img
            className="followPic"
            src={follower.avatar_url}
            alt={follower.name}
          />
          <div className="lines1">{follower.name}</div>
          <div className="lines2">{follower.login}</div>
          <div className="lines3">{follower.type}</div>
        </div>
      ))}
    </>
  );
}
export default Followers;
