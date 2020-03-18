import React from 'react'
import './App.css'
import axios from 'axios'

import UserCard from './components/userCard'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      userData: [],
      followerData: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/erikscow')
      .then(res => {
        this.setState({
          userData: res.data
        })
      })
      .catch(err => console.log('Something went wrong in the API call: ', err))
      axios.get('https://api.github.com/users/erikscow/followers')
        .then(res => {
          console.log(res)
          this.setState({
            followerData: res.data
          })
        })
        .catch(err => console.log('follower api call error:', err))
  }

  render(){
    return (
      <div className='App'>
        <h1>React Github User Card</h1>
        <UserCard userData={this.state.userData} />
        {this.state.followerData.map((item, i) => {
          return(<UserCard key={i} userData={this.state.followerData[i]}/>)
        })}
      </div>
    )
  }

}

export default App;
