import React, { Component } from 'react'
import Follower from './Follower'

class FollowerList extends Component {
  render() {
    return (
      <>
        <h4>{`${this.props.userName}'s Followers`}</h4>
        <div className='follower-list'>
          {this.props.followers.map((follower) => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </>
    )
  }
}

export default FollowerList
