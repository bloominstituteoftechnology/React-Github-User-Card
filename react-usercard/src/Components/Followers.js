import React, { useEffect } from "react";

function Followers(props) {
  const { follower } = props;
  useEffect(() => {
    console.log(follower);
  }, [follower]);

  return (
    <div className="follower-container">
      {props.follower.map(follower => (
        <div key={follower.id} className="follower">
          <img src={follower.avatar_url}></img>
          <h2>Name: {follower.name}</h2>
          <h3>Bio: {follower.bio}</h3>
          <h3>Location: {follower.location}</h3>
        </div>
      ))}
    </div>
  );
}

export default Followers;
