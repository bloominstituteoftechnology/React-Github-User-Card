
import User from './components/User'
import './App.css';
import Followers from './components/Followers';

import React, { Component } from 'react';
import axios from 'axios';


 class App extends Component {
  state = { 
    username: "W-B28",
    followers: 16,
    public_repos: 56,
    avatar_url: "https://avatars1.githubusercontent.com/u/50033779?v=4"
  };

 

  componentDidMount() {
    axios 
      .get('https://api.github.com/users/w-b28')
      .then(res => {
        console.log(res.data)
        const persons = res.data;
        this.setState({ persons });
        console.log({persons})
      })
  }


  render() {
     const { avatar_url, followers, public_repos } =this.state
     return (
    <div className="App-container">
     <User username={this.state.username} followers={followers} image={avatar_url} repos={public_repos}/> 
     <Followers />
    </div>
    );
  }
}
export default App

