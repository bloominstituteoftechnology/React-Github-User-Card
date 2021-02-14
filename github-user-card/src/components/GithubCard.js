import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios'


export class GithubCard extends Component {
  constructor() {
    super();
      this.state = {
      user: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/iam-saeed') 
    .then(res => {this.setState({
      ...this.state,
      user: res.data
    })})
  }

  render() {
    return (
      <div>
        <h1> {this.state.user.login} <Avatar img src={this.state.user.avatar_url}/></h1>
        <p><strong>Full Name:</strong>{this.state.user.name}</p>
        <p><strong>Bio: </strong>{this.state.user.bio}</p>
        <p><strong>Location: </strong>{this.state.user.location} </p>
        <p><strong>Current Company:</strong>{this.state.user.company}</p>
        <p><strong>Following:</strong> {this.state.user.following}</p>
        <p><strong>Followers:</strong>{this.state.user.followers}</p>
      </div>
    )
  }
}

export default GithubCard