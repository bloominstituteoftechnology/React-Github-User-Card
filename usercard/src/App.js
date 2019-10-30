import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import UserCard from './UserCard'
import FollowersList from './FollowersList'

class App extends React.Component {
  state={
    user: [],
    userSearch: [],
    followers: []
  }
  componentDidMount(){
    axios
    .get('https://api.github.com/users/dantebui')
    .then(res=>{
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err=>{
      console.log(err, 'Cannot fetch User Data')
    })
  }
  fetchUserData(){
    fetchNewUser= ()=>{
      axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
      .then(res=>{
        console.log(res.data, 'this is the current user')
        this.setState({
          user: res.data
        })
      })
    }
    fetchUserFollowers= ()=>{
      axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res=>{
        console.log(res.data, 'there are the users followers')
        this.setState({
          followers: res.data
        })
      })
    }
  }
  // fetchNewUser= ()=>{
  //   axios
  //   .get(`https://api.github.com/users/${this.state.userSearch}`)
  //   .then(res=>{
  //     console.log(res.data, 'this is the current user')
  //     this.setState({
  //       user: res.data
  //     })
  //   })
  // }
  // fetchUserFollowers= ()=>{
  //   axios
  //   .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
  //   .then(res=>{
  //     console.log(res.data, 'there are the users followers')
  //     this.setState({
  //       followers: res.data
  //     })
  //   })
  // }
  handleChanges= e=>{
    this.setState({
      userSearch: e.target.value
    })
  }
  render(){
    return(
      <div>
        <input
          type='text'
          value={this.state.userSearch}
          onChange={this.handleChanges}
          placeholder='Enter a GitHub Username'
        />
        <button onClick={this.fetchUserData}>Find a New User</button>
        <div>
          <UserCard user={this.state.user}/>
        </div>
        <div>
          <FollowersList user={this.state.followers}/>
        </div>
      </div>
    )
  }
}

export default App;
