import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import UserCard from './components/UserCard'
import SearchBar from './components/SearchBar'
import Followers from './components/Followers'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: {},
      searchText: '',
      followers: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/elCarlosSantiago')
      .then((res) => {
        this.setState({
          users: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
    axios
      .get('https://api.github.com/users/elCarlosSantiago/followers')
      .then((res) => {
        this.setState({
          followers: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
        debugger
      })
  }

  onInputChange = (e) => {
    this.setState({ searchText: e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    axios
      .get(`https://api.github.com/users/${this.searchText}`)
      .then((res) => {
        this.setState({
          users: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
        debugger
      })
    axios
      .get(`https://api.github.com/users/${this.searchText}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data,
        })
      })
      .catch((err) => {
        console.error(err)
        debugger
      })
  }

  render() {
    return (
      <>
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <div className="container">
          <UserCard users={this.state.users} />
          {this.state.followers.map((follower) => {
            return <Followers key={follower.id} followers={follower} />
          })}
        </div>
      </>
    )
  }
}

export default App
