import './App.css';
import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    this.fetchUserData() 
    // console.log(this.state)
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

  render() {
    return (
      <div>
        {this.state.user.name}
      </div>
    )
  }
}

