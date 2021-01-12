import './styles/App.css';
import Usercard from './Usercard.js'

import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/leahfern')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Github User Info</h1>
        <Usercard user={this.state.user}/>
      </div>
    )
  }
}
