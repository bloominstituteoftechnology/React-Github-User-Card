import React from 'react';

const UserCard = ({ user }) => {
   return (
      <div>
         <img src={user.avatar_url} alt='Adrian Guadalupe' />
         <h2>{user.name}</h2>
         <p>{user.bio}</p>
         <p>{user.location}</p>
         <p>Followers: {user.followers}</p>
         <p>Following: {user.following}</p>
      </div>
   )
}

export default UserCard;