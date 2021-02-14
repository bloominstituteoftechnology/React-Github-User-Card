import React from 'react';


class FollowerCard extends React.Component {
    render(){

    const { follower } = this.props

    return (
      <div className="followers-card">
        <img src={follower.avatar_url} alt='follower avatar'/>
        <p>{follower.login}</p>
      </div>

    )
  }
}

export default FollowerCard; 