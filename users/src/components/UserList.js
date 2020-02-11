import React from 'react';
import UserCard from './UserCard';

const UserList = props => {

  return(
    <div>
      <h1>{props.userData.name} and Followers</h1>
      <UserCard card={props.userData} />

      {props.followerData.map(card => (
        <UserCard key={card.id} card={card} />
      ))}
    </div>

  )
}

export default UserList;