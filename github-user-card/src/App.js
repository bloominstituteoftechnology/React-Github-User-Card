// import './App.css';

import React, { Component } from 'react'
import UserCard from './Components/UserCard'
import Axios from 'axios';
import FollowersCard from './Components/FollowersCard';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      followers: []
    };
  }

  componentDidMount(){
    this.fetchUser()
    this.fetchFollowers()
  }
  

  fetchUser = () => {
    Axios.get('https://api.github.com/users/LeonChisum')
        .then(res => {
          console.log(res)
          this.setState({
            users: [{
              name: res.data.name,
              image: res.data.avatar_url,
              bio: res.data.bio,
              followers: res.data.followers,
          }]})
        })
  }

  fetchFollowers = () => {
    Axios.get('https://api.github.com/users/LeonChisum/followers')
        .then(res => {
            console.log(res.data)
            this.setState({
              followers: res.data
            })
            }) 
  }
          

  render() {
    console.log(this.state.users)
    console.log(this.state.followers)
    return (
      <div>
        <div>
        {this.state.users.map((user, index) => (
          <UserCard key={index} users={user} />
      ))}
        </div>
        <h1>Followers:</h1>
        <div>
        {this.state.followers.map(user => (
          <FollowersCard key={user.id} users={user} />
      ))}
        </div>
      </div>
    )
  }
}

