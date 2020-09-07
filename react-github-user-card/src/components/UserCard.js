import React from "react";

const UserCard = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.userInfo.avatar_url} />
      <div>
        <h3>{props.userInfo.login}</h3>
        <p>{props.userInfo.location}</p>
        <a href={props.userInfo.html_url}>{props.userInfo.login}'s profile</a>
      </div>
    </div>
  );
};

export default UserCard;
