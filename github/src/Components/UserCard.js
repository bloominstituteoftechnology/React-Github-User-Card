import React from 'react';

const UserCard = props => {
  console.log("vr: usercard: props: ", props)
  return (
    <div>
      <h3>{props.users.login}</h3>
      <img src={props.users.avatar_url} alt="followerImage" />
    </div>
  )         
};

 
 
export default UserCard; 