import React, { Component } from 'react'

export default class SubUsers extends Component {


  handleClick = e => {
    e.preventDefault();
    this.props.setFollowersOrFollowing({
      followDetails: e.target.name,
    })
  };

  handleUserClick = e => {
    this.props.setNewMainUser(e.target.dataset.username)
  }

  render() {
    return (
      <div>
        <button
          name='followers'
          className={`follow${this.props.followDetails === 'followers' ? ' selected' : ''}`} 
          onClick={this.handleClick}>Followers: {this.props.userInfo.followers}
        </button>
        <button
          name='following'
          className={`follow${this.props.followDetails === 'following' ? ' selected' : ''}`}
          onClick={this.handleClick}>
          Following: {this.props.userInfo.following}
        </button>
        <div className='followDetails'>
          { this.props.followDetails === 'followers'
            ? this.props.followers.map(user => {
              return (
                <div value='' key={user.id} className='subUser'>
                <img src={user.avatar_url} alt={`${user.login}`} onClick={this.handleUserClick} data-username={user.login}/>
                </div>
              )
            })
            : this.props.following.map(user => {
              return (<div key={user.login} className='subUser'>
                <img src={user.avatar_url} alt={`${user.login}`} onClick={this.handleUserClick} data-username={user.login}/>
              </div>)
            })
          }
        </div>
      </div>
    )
  }
}
