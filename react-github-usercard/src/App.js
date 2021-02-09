import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import Followers from './components/Followers';

export class App extends Component {
  state = {
    github: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Stone98')
      .then((res) => {
        this.setState({
          github: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
        <div className='card'>
          <img src={this.state.github.avatar_url} alt='user-avatar' />
          <div className='card-info'>
            <h3 className="name">{this.state.github.name}</h3>
            <p className="username">{this.state.github.login}</p>
            <p>Location: {this.state.github.location}</p>
            <p>Profile: <a href={this.state.github.html_url}>{this.state.github.html_url}</a></p>
            <p>Followers: {this.state.github.followers}</p>
            <p>Following: {this.state.github.following}</p>
            <p>Bio: {this.state.github.bio}</p>
          </div>
        </div>
        <div className='card'>
          <h2 className='name'>{this.state.github.login}'s Followers:</h2>
        </div>
        <div>
          <Followers />
        </div>
      </>
    )
  }
}

export default App

