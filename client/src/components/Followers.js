import React from 'react';
import FollowerCard from './FollowerCard';


const Follower = ({ follower }) => {
  return follower.map(follow => <FollowerCard follow={follow} key={follow.id}  />)
}

export default Follower
