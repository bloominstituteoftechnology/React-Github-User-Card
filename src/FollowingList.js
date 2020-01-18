import React from 'react';
import FollowingCard from './FollowingCard';

const FollowingList = ({ followings }) => {
   return (
      <div>
         {followings.map(following => (
            <FollowingCard key={following.id} following={following} />
         ))}
      </div>
   )
}

export default FollowingList;