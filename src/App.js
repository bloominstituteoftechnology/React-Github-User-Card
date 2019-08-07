import React from 'react'
import FollowerList from './components/FollowerList'
import './App.scss'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: 'kristinbarr',
      userInfo: {},
      followers: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.fetchFollowers(this.state.userName)
  }

  // componentDidUpdate(prevProps) {
  //   if (this.state.userName !== prevProps.userName) {
  //     this.fetchFollowers(this.state.userName)
  //   }
  // }

  handleChange = (e) => {
    console.log('change', e.target.value)
    this.setState({ userName: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit', e.target)
    // this.setState({ userName: e.target })
    // this.fetchFollowers(e.target.value)
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
    console.log('state', this.state)
    console.log('props', this.props)
    const { userName, followers, userInfo } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h3>GITHUB USER CARD</h3>
          <div className='searchbar'>
            <form onSubmit={this.handleSubmit}>
              <label>
                <h5>FIND A USER:&nbsp;</h5>
                <input
                  type='text'
                  value={this.state.userName}
                  onChange={this.handleChange}
                  placeholder='Github Username'
                />
              </label>
              <button type='submit'>SEARCH</button>
            </form>
          </div>
        </header>
        <div className='profile'>
          <img src={userInfo.avatar_url} alt='avatar' />
          <div className='profile-name'>
            <h3>{userInfo.name}</h3>
            <h5>
              Location:&nbsp;<span>{userInfo.location}</span>
            </h5>
            <h5>{userInfo.bio}</h5>
          </div>
          <div className='stats'>
            <div className='stat-item'>
              <h3>{userInfo.public_repos}</h3>
              <h5>Public Repos</h5>
            </div>
            <div className='stat-item'>
              <h3>{userInfo.followers}</h3>
              <h5>Followers</h5>
            </div>
            <div className='stat-item'>
              <h3>{userInfo.following}</h3>
              <h5> Following</h5>
            </div>
          </div>
        </div>
        <FollowerList
          userName={userName}
          followers={followers}
          userInfo={userInfo}
        />
      </div>
    )
  }
}

export default App
