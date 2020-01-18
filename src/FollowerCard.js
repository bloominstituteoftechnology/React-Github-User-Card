import React from 'react';

const FollowerCard = ({ follower }) => {
   return (
      <div>
         <img src={follower.avatar_url} />
         <h2>Login Id: {follower.login}</h2>
         <p>{follower.html_url}</p>
      </div>
   )
}

export default FollowerCard;