import React from 'react'

import Follower from './Follower'

const FollowersList = props => {
  console.log(props)

  return (
    <>
      <div className='followers-header'>
        <h1>My Followers!</h1>
        <h4>{props.userFollowers}</h4>
      </div>
      <div className='followers-list'>
        {props.followers.map(follower => (
          <div id={follower.id}>
            <Follower
              picture={follower.avatar_url}
              handle={follower.login}
              profile={follower.html_url}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default FollowersList
