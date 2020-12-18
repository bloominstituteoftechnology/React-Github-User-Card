import React from 'react'
import axios from 'axios'
import './App.css'; 
import UserCards from '/.UserCards'


class App extends React.Component
{
  state = {
    user: {},
    followers: []
  }
  componentDidMount()
  {
    axios.get('https://api.github.com/users/carolinefallonlucas')
      .then(res =>
        this.setState({
          user: res.data
        }))
      .catch(err => console.log(err))
    axios
      .get('https://api.github.com/users/carolinefallonlucas/followers')
      .then(res =>
        this.setState({
          followers: res.data
        }))
      .catch(err => console.log(err))
  }
  render()
  {
    return (
      <div className='App'>
        <UserCards user={ this.state.user } />
        {this.state.followers.map(follower => (<div className='CardComponent' key={ follower.id }>
          <h2>User: { follower.login }</h2>
        </div>
        
        )) }
      </div>
    )
  }
}

export default App; 