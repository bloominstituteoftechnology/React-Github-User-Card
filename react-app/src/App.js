import React from 'react'
import axios from 'axios'

import './App.css'

import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    searchValue: '',
    currentUser: 'joshwhitwell',
  }

  componentDidMount() {
    console.log('mount')
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        console.log('axios 1')
        this.setState({ user: res.data })
        return res.data.followers_url
      })
      .then(res => {
        axios.get(res)
          .then(res => {
            console.log('axios 2')
            this.setState({ followers: res.data })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      this.getUser()
    }
  }

  getUser = () => {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        console.log('axios 3')
        this.setState({ user: res.data })
        return res.data.followers_url
      })
      .then(res => {
        axios.get(res)
          .then(res => {
            this.setState({ followers: res.data })
          })
          .catch(err => {
            console.log(err)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  changeHandler = (e) => {
    this.setState({ searchValue: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.setState({ currentUser: this.state.searchValue })
    this.getUser()
    this.setState({ searchValue: '' })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <form onSubmit={this.submitHandler}>
          <input type='text' value={this.state.searchValue} onChange={this.changeHandler}/>
          <button>Search</button>
        </form>
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} user={this.state.user.name}/>
      </div>
    )
  }
}

export default App;
