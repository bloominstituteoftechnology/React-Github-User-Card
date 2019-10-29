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
          <img src={follower.avatar_url} alt="follower avatar"></img>
          <h2>Username: {follower.login}</h2>
        </div>
      ))}
    </div>
  );
}

export default Followers;
