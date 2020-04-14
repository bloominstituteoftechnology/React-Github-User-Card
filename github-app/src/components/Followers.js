import React from "react";

const Followers = props => {
  return (
     <div className="followersCont">
        {props.followers.map(person => (
          <div className="followerCard">
            <img width="250px" src={person.avatar_url} alt="" />
            <div className="nameDiv">
              <p>GitHub Name:</p>
              <p>{person.login}</p>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Followers;