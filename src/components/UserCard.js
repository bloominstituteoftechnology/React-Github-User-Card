import React from 'react';
import './UserCard.css';

const UserCard = props => {
   
  const {avatar_url, name, login, location, url, followers, following, bio} = props.user;

    return (
      <div className="card">
        <img src={avatar_url} alt="" />
        <div className="card-info">
        <h3 className="name">{name}</h3>
          <p className="username">{login}</p>
          <p>Location: {location}</p>
          <p>Profile:<a href="#" src={url}>{url}</a></p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </div>
      </div>   
    );
  };
  
  export default UserCard;