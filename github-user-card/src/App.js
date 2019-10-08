// import './App.css';

import React, { Component } from 'react'
import UserCard from './Components/UserCard'
import Axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
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
            this.setState([...this.state.users, res.data.map(() => (
              {
                users: [{
                  name: res.data.name,
                  image: res.data.avatar_url,
                  bio: res.data.bio,
                  followers: res.data.followers,
                }]
              }
            ))])
            }) 
  }
          

  render() {
    console.log(this.state.users)
    return (
      <div>
      {this.state.users.map((user, index) => (
        <UserCard key={index} users={user} />
    ))}
      </div>
    )
  }
}

