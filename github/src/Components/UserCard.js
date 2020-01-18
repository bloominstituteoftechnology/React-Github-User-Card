import React from 'react';

const UserCard = props => {
  console.log("vr: usercard: props: ", props)
  return (
    <div>
      <h3>{props.users.login}</h3>
    </div>
  )         
};

 
 
export default UserCard; 