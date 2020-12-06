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
      userFollowers: []
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
        console.log(data)
        this.setState({
          ...this.state,
          userInfo: {...data}
        })
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
}

componentDidUpdate(prevProps, prevState) {
  if(prevState.userInfo !== this.state.userInfo){
    axios
    .get("https://api.github.com/users/" + this.state.userName + '/followers')
    .then(({ data }) => {
      console.log(data)
      this.setState({
        ...this.state,
        userFollowers: data
      })
    })
    .catch((err) => console.log(err));
  }
}


  render() {
    return(
      <div className='App'>
        {/* HERO SECTION */}
        <div className='hero'>
          <h1>Get Github User</h1>
          <div>
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
          <h2 className='secondary'>Followers:</h2>
          {this.state.userFollowers.map(user => {
            return (
              <UserCard {...user} />
            )
          })}
        </div>

      </div>
    )
  }


}

export default App;
