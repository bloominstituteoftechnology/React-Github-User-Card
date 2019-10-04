import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
constructor() {
  super()
  this.state = {
    followers: []
    
  }
}

componentDidMount() {
  axios.get(`https://api.github.com/users/Reticent93/${this.state.followers}`)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err.res)
  })
}

  render() {
    return (
      <form>
      <h1>GitHub Friends</h1>
      {this.state.followers.map((item, index) => (
        <h1 key={index} item={item} />
      ))}
      </form>
    )
  }
}
