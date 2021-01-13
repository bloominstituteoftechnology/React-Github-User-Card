import React, { Component } from 'react';
import axios from 'axios';
import SubUsers from './SubUsers';

export default class Usercard extends Component {
  state = {
    followDetails: [],
    followers: [],
    following: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.props.currentUser}/followers`)
    .then(res => {
      this.setState({
        followDetails: 'followers',
        followers: res.data,
      })
    })
    axios.get(`https://api.github.com/users/${this.props.currentUser}/following`)
    .then(res => {
      this.setState({
        following: res.data
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.currentUser !== this.props.currentUser) {
      axios.get(`https://api.github.com/users/${this.props.currentUser}/followers`)
      .then(res => {
        this.setState({
          followDetails: 'followers',
          followers: res.data,
        })
      })
      axios.get(`https://api.github.com/users/${this.props.currentUser}/following`)
      .then(res => {
        this.setState({
          following: res.data
        })
      })
    }
  }

  setFollowersOrFollowing = followDetails => {
    this.setState(followDetails)
  };

  setNewMainUser = username => {
    this.props.setNewMain(username)
  }


  render() {
    return (
      <div className='Usercard'>
        { this.props.userInfo.name
          ? <h2>{this.props.userInfo.name}</h2>
          : <h2>{this.props.userInfo.login}</h2>
        }
        { this.props.userInfo.name
          ? <h4>{this.props.userInfo.login}</h4>
          : ''
        }
        <a href={`https://www.github.com/${this.props.userInfo.login}`} target="_blank" rel='noreferrer'>
          <img src={this.props.userInfo.avatar_url} alt={this.props.userInfo.login} className='mainUserImg'/>
        </a>
        <ul className='info-bottom'>
          {this.props.userInfo.location 
            ? <li>{this.props.userInfo.location}</li>
           : ''}
          {this.props.userInfo.company 
           ? <li>{this.props.userInfo.company}</li>
           : ''}
          {this.props.userInfo.bio 
           ? <li>"{this.props.userInfo.bio}"</li>
            : ''}
        </ul>
        <SubUsers 
          followDetails={this.state.followDetails}
          setFollowersOrFollowing = {this.setFollowersOrFollowing}
          userInfo={this.props.userInfo}
          followers = {this.state.followers}
          setNewMainUser = {this.setNewMainUser}
          following = {this.state.following}
        />

      </div>
    )
  }
}
