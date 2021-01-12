import React, { Component } from 'react'
import axios from 'axios';

export default class Usercard extends Component {
  state = {
    followDetails: [],
    displayedUsers: [],
  }

  handleClick = e => {
    e.preventDefault();
    console.log(`${e.target.name} button was clicked`)
    
    axios.get(`https://api.github.com/users/leahfern/${e.target.name}`)
      .then(res => {
        this.setState({
          followDetails: e.target.name,
          displayedUsers: res.data
        })
      })
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div className='Usercard'>
        { this.props.user.name
          ? <h2>{this.props.user.name}</h2>
          : <h2>{this.props.user.login}</h2>
        }
        <h4>{this.props.user.login}</h4>
        <img src={this.props.user.avatar_url} alt={this.props.user.login} user image/>
        <ul>
          {this.props.user.location 
            ? <li>{this.props.user.location}</li>
           : ''}
          {this.props.user.company 
           ? <li>{this.props.user.company}</li>
           : ''}
          {this.props.user.bio 
           ? <li>{this.props.user.bio}</li>
            : ''}
        </ul>
        <button
          name='followers'
          className={`follow${this.state.followDetails === 'followers' ? ' selected' : ''}`} 
          onClick={this.handleClick}>Followers: {this.props.user.followers}
        </button>
        <button
          name='following'
          onClick={this.handleClick}>
          Following: {this.props.user.following}
        </button>
        <div className='followDetails'>
            {this.state.displayedUsers.map(user => {
              return (<div key={user.id} className='subUser'>
                <img src={user.avatar_url} alt={`${user.login}`}/>
              </div>)
            })}
        </div>

      </div>
    )
  }
}
