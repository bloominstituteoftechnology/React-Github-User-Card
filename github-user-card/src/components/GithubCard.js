import React, { Component } from 'react'
import '../Github-Card.css'
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
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

      <div className="github__card">
          <Card>
          <div className="avatar">
        <Avatar img src={this.state.user.avatar_url} />
        </div>
        <h1> {this.state.user.login} </h1>
        <p><strong>Full Name: </strong>{this.state.user.name}</p>
        <p><strong>Bio: </strong>{this.state.user.bio}</p>
        <p><strong>Location: </strong>{this.state.user.location} </p>
        <p><strong>Current Company: </strong>{this.state.user.company}</p>
        <p><strong>Following: </strong> {this.state.user.following}</p>
        <p><strong>Followers: </strong>{this.state.user.followers}</p>
        </Card>
      </div>
    )
  }
}

export default GithubCard