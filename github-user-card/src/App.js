import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      user: 'TreyMcGarity', 
      followers: '',
      //jbrock1981
    }
  }

  componentDidMount() {
    this.getUsers();
    this.getFollowers();
  }

  getUsers = () => {
      axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log("data from user axios",response.data);
        this.setState({ user: response.data })
      })
      .catch(error => {
        console.log('Data was not returned', error)
      })
  }

  getFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user}/following`)
    .then(response => {
      console.log("data from followers axios", response.data);
      this.setState({ followers: response.data })
    })
    .catch(error => {
      console.log('Data was not returned', error)
    })
  }

  render() {
    // console.log("user from render:",this.state.user);
    // console.log("followers from render:",this.state.followers);
    return(
      <div>
        <h1>Github User Card</h1>
        <div className="user-content">
            <h3 className="user-name">{this.state.user.name}</h3>
            <img className="user-img" src={this.state.user.avatar_url} alt="user's avatar"/>
            <div>
            <p>Bio:{this.state.user.bio}</p>
            <p>Location:{this.state.user.location}</p>
            <p>Followers:{this.state.user.following}</p>
            </div>
        </div>
      </div>
    )
  }
}
export default App;