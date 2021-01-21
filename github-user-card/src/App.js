import './styles/App.css';
import Usercard from './Usercard.js'

import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    userInfo: {},
    inputValue: '',
    currentUser: 'leahfern'
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          userInfo: res.data
        })
      })
      .catch(err => console.log(err))
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.currentUser !== this.state.currentUser) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        this.setState({
          userInfo: res.data
        })
      })
      .catch(err => console.log(err))
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      currentUser: this.state.inputValue,
      inputValue: '',
    })
  }
  handleChange= e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  setNewMain = username => {
    this.setState({
      currentUser: username
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>Github User Info</h1>
        <div className='changeUser'>
          <p>Try another user?</p>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='github username' value={this.state.inputValue} onChange={this.handleChange}/>
            <button>send</button>
          </form>
        </div>
        <Usercard userInfo={this.state.userInfo} currentUser={this.state.currentUser} setNewMain={this.setNewMain}/>
        <div className='buffer'></div>
      </div>
    )
  }
}
