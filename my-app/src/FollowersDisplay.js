import React from "react";

const FollowersDisplay = (props) => {
  return (
    <>
      <div>
        {props.followers.map(person => (
          <div>
              <h1>My Followers</h1>
            <img src={person.avatar_url} alt="" />
            <h3>GitHub Name: {person.login}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default FollowersDisplay;