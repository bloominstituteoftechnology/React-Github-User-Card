import React from "react";

export default function Followers(props) {
  const { followers } = props;
  console.log(followers);
  return (
    <div>
      {followers.map(follower => {
        return (
          <>
            <h1>Followers: {follower.login}</h1>
          </>
        )
      })}
    </div>
  );
}
