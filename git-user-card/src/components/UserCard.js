import React from "react";

const UserCard = props => {
  console.log("card rendered");
  return (
    <div className="userCard">
      <img className="userImage" src={props.image} alt="pic" />
      <div className="userInfo">
        <h1 className="userName">{props.name}</h1>
        <em className="userBio">{props.bio}</em>
        <p>Location:{props.location}</p>
        <p>Followers:{props.follower}</p>
        <p>Following:{props.following}</p>
      </div>
    </div>
  );
};

export default UserCard;
