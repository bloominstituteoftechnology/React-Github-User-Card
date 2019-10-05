import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Followers from './components/Followers'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount(){
    this.fetchUserData() 
    this.fetchFollowers()
  }



fetchUserData = () => {
  axios.get('https://api.github.com/users/bobbidigi')
      .then(res => {
      // console.log(res)
      this.setState({user: res.data})   
    })
    .catch(error => {
      console.log(error)
    })
} 


fetchFollowers = () => {
  axios.get('https://api.github.com/users/bobbidigi/followers')
      .then(res => {
      console.log(res)
      this.setState({followers: res.data})   
    })
    .catch(error => {
      console.log(error)
    })
} 

  render() {
    return (
      <div>
        <Card user={this.state.user}/>
        <Followers followers={this.state.followers}/>
      </div>
    )
  }
}

