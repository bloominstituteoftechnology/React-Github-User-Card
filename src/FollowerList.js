import React from 'react';
import FollowerCard from './FollowerCard';

const FollowerList = ({ followers }) => {
   return (
      <div>
         {followers.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
         ))}
      </div>
   )
}

export default FollowerList;