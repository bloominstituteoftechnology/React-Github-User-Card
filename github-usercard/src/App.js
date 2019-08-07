import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./components/UserCard"
import UserGrid from "./components/UserGrid"
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
    console.log('this.state.userFollowers', this.state.userFollowers);
    return (
      <div>

        <UserGrid
          user={this.state.userInfo}
          followers={this.state.userFollowers}
         />
        {/* <UserCard user={this.state.userInfo} />
        {this.state.userFollowers.map(follower => {
          return <FollowersCard
          name={follower.login}
          photo={follower.avatar_url}
          link={follower.html_url}
          key={follower.id}/>
        })} */}
      </div>
    );
  }

}

export default App;
