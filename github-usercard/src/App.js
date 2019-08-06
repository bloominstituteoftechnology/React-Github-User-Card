import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./components/UserCard"
import FollowersCard from "./components/FollowersCard"

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      userInfo: [],
      userFollowers: []
    }
  }

  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = () => {
    axios.get('https://api.github.com/users/gcj2')
      .then (response => {
        console.log('response.data:', response.data);
        const userInfo = response.data;
        this.setState({userInfo})
        })
        .catch(err => {
          console.log(err);
        })
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/gcj2/followers`)
      .then (response => {
        console.log('followers:', response);
        const userFollowers = response.data;
        this.setState({userFollowers})
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
    console.log(this.state.userFollowers);
    return (
      <div>
        <UserCard user={this.state.userInfo} />
        
      </div>
    );
  }

}

export default App;
