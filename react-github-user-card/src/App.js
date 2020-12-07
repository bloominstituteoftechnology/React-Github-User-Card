import React from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: '',
      userInfo: {},
      userFollowers: [],
      updating: false
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      userName: e.target.value
    })
  }


  fetchUser = () => {
    axios
      .get("https://api.github.com/users/" + this.state.userName)
      .then(({ data }) => {
        this.setState({
          ...this.state,
          userInfo: {...data}
        })
      })
      .catch((err) => console.log(err));
  }

  handleClick = (e) => {
    this.setState({
      ...this.state,
      userName: e.target.value,
      updating: !this.state.updating
    })
  }

componentDidUpdate(prevProps, prevState) {
  if(prevState.userInfo !== this.state.userInfo){
    axios
    .get("https://api.github.com/users/" + this.state.userName + '/followers')
    .then(({ data }) => {
      this.setState({
        ...this.state,
        userFollowers: data
      })
    })
    .catch((err) => console.log(err));
  }

  if(prevState.updating !== this.state.updating){
    this.fetchUser()
  }

  // if(this.state.updating === true) {
  //   this.fetchUser()
  //   this.setState({
  //     ...this.state,
  //     updating: false
  //   })
  // }
}


  render() {
    return(
      <div className='App'>
        {/* HERO SECTION */}
        <div className='hero'>
          <h1>Get Github User</h1>
          <div className='search-box'>
            <input
              placeholder='Enter github user name'
              value={this.state.userName}
              type='text'
              onChange={this.handleChanges}
            />
            <button
              onClick={this.fetchUser}
            >
              Show me the user!
            </button>
          </div>
        </div>

        {/* USER CARDS */}
        <div className='card-wrapper'>
          <div>
            <UserCard {...this.state.userInfo} />
          </div>
          <h2 className='secondary followers'>{this.state.userFollowers.length} Followers:</h2>
          {this.state.userFollowers.map(user => {
            return (
              <UserCard key={this.state.userInfo.login} {...user} handleClick={this.handleClick} button='display' />
            )
          })}
        </div>

      </div>
    )
  }


}

export default App;
