import React from 'react'
import FollowerList from './components/FollowerList'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: 'kristinbarr',
      userInfo: {},
      followers: []
    }
  }

  componentDidMount() {
    this.fetchFollowers(this.state.userName)
  }

  handleNameChange = (e) => {
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e) => {
    this.fetchFollowers(e.target.value)
  }

  fetchFollowers = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        return res.json()
      })
      .then((resInfo) => {
        this.setState({ userInfo: resInfo })
        return fetch(this.state.userInfo.followers_url)
      })
      .then((followers) => {
        return followers.json()
      })
      .then((userFollowers) => {
        this.setState({ followers: userFollowers })
        return userFollowers
      })
      .catch((err) => {
        console.log('something went wrong!', err)
      })
  }

  render() {
    const { userName, followers, userInfo } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>GITHUB USER CARD</h3>
          {/* <div className='searchbar'>
            <form type='submit'>
              <h5>FIND A USER:&nbsp;</h5>
              <input
                onChange={this.handleNameChange}
                placeholder='Github Username'
              />
              <button onSubmit={this.handleSubmit}>SEARCH</button>
            </form>
          </div> */}
        </header>
        <div className='profile'>
          <img src={userInfo.avatar_url} />
          <div className='profile-name'>
            <h3>{userInfo.name}</h3>
            <h4>
              Location:&nbsp;<span>{userInfo.location}</span>
            </h4>
            <h5>{userInfo.bio}</h5>
          </div>
          <div className='stats'>
            <div>
              <h5>{userInfo.public_repos}</h5>
              <h5>Public Repos</h5>
            </div>
            <div>
              <h5>{userInfo.followers}</h5>
              <h5>Followers</h5>
            </div>
            <div>
              <h5>{userInfo.following}</h5>
              <h5> Following</h5>
            </div>
          </div>
        </div>
        <FollowerList userName={userName} followers={followers} />
      </div>
    )
  }
}

export default App
