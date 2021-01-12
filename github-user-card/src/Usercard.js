import React, { Component } from 'react'

export default class Usercard extends Component {

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
        <li>Followers: {this.props.user.followers}</li>
        <li>Following: {this.props.user.following}</li>
        </ul>

      </div>
    )
  }
}
