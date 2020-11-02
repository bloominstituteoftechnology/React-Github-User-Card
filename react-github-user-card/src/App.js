import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'
import FollowersCard from './components/FollowersCard'
import SearchField from './components/SearchField'
class App extends Component {
  constructor() {
    super()
    this.state = {
      main: [],
      followers: [],
      search: ''
    }
  }

  //
  componentDidMount() {
    axios.get('https://api.github.com/users/robelv2020')
      .then(res => {
        this.setState({
          main: res.data
        })
        return res.data.followers_url
      })
      .then(res => {
        axios.get(res)
          .then(res => {
            this.setState({
              followers: res.data
            })
          })
      })
  }

  // 
  handleChange = e => {
    this.setState({ search: e.target.value })
    console.log(this.state.search)
  }

  // 
  handleForm = e => {
    e.preventDefault()
    const setSearch = this.state.search
    axios.get(`https://api.github.com/users/${setSearch}`)
      .then(res => {
        this.setState({
          main: res.data
        })
        return res.data.followers_url
      })
      .then(res => {
        axios.get(res)
          .then(res => {
            this.setState({
              followers: res.data
            })
          })
      })
  }

  render() {
    return (
      <div>
        <UserCard main={this.state.main} />
        <SearchField />
        <div>
          <FollowersCard followers={this.state.followers} />
        </div>
      </div>
    )
  }
}
export default App;
