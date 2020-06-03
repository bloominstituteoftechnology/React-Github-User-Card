import React from 'react';
import FollowerItem from '../follows/FollowerItem';

const Follower = ({ follower }) => {
  return follower.map(follow => <FollowerItem follow={follow} key={follow.id}  />)
}

export default Follower
