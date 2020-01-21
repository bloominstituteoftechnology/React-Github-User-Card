import React from 'react';
import FollowerCard from './FollowerCard';
import { Container } from 'semantic-ui-react';

const FollowerList = ({ followers }) => {
   return (
      <div className='list-container'>
         {followers.map(follower => (
            <FollowerCard key={follower.id} follower={follower} />
         ))}
      </div>
   )
}

export default FollowerList;