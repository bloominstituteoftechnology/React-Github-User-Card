import React from 'react';


class FollowerCard extends React.Component {
    render(){

    const { follower } = this.props

    return (
      <div className="card">
        <img src={follower.avatar_url} alt='follower avatar'/>
        <p className='username'>{follower.login}</p>
      </div>

    )
  }
}

export default FollowerCard; 