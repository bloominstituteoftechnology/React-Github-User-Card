import React from "react";

const Followers = props => {



  return (
    <div>
      <h1>Rollowers: </h1>
      {props.followers.map((item) => (
        <div>
          <h2>{item.login}</h2>
          <img src={item.avatar_url} />
        </div>
      ))}
    </div>
  );
};

export default Followers;
