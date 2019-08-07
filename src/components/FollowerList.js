import React, { Component } from 'react'
import Follower from './Follower'

class FollowerList extends Component {
  render() {
    return (
      <div className='followers'>
        <h4>{`${this.props.userInfo.login}'s Followers`}</h4>
        <div className='followers-list'>
          {this.props.followers.map((follower) => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    )
  }
}

export default FollowerList
