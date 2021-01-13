import React, { Component } from 'react';
import UserCard from './UserCard'
import FollowerCards from './FollowerCards.js'
import './App.css';

export default class App extends Component {

  state = {
    myCard: {},
    myFollowers: [],
  } 
  
  componentDidMount() {
    fetch('https://api.github.com/users/GradyB-Lambda')
      .then((res) => res.json())
      .then((res) => {
        this.setState({myCard: res})
      })
      .catch((err) => console.log("error: ", err));

      fetch('https://api.github.com/users/GradyB-Lambda/followers')
      .then((res) => res.json())
      .then((res) => {
        this.setState({myFollowers: res})
        console.log('follower state info', res)
      })
      .catch((err) => console.log("error: ", err));
  }

  render() {
    return (
      <div className='parent'>
      <div>
      <UserCard myCard={this.state.myCard}/>
      </div>
      <div>
        <FollowerCards myFollowers={this.state.myFollowers}/>
      </div>
      </div>
    )
  }

}