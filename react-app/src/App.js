import React from 'react'
import axios from 'axios'

import './App.css'
import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/joshwhitwell')
      .then(res => {
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
  
  render() {
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <UserCard user={this.state.user} />
        <Followers followers={this.state.followers} user={this.state.user.name}/>
      </div>
    )
  }
}

export default App;
