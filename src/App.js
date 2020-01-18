import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import UserCard from './UserCard';
import FollowerList from './FollowerList';
import FollowingList from './FollowingList'

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    followings: [],
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Adrian-Guadalupe')
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => console.log('NOOOOOO!!!!', err))

    axios
      .get('https://api.github.com/users/Adrian-Guadalupe/followers')
      .then(res2 => {
        console.log(res2.data);
        this.setState({
          ...this.state,
          followers: res2.data
        })
      })
      .catch(err2 => console.log('NOOOOOO!!!!', err2))

      axios
      .get('https://api.github.com/users/Adrian-Guadalupe/following')
      .then(res3 => {
        console.log(res3.data);
        this.setState({
          ...this.state,
          followings: res3.data
        })
      })
      .catch(err3 => console.log('NOOOOOO!!!!', err3))  
  }

  render() {
    return (
      <div className="App">
        <Route 
          path='/' 
          render={()=> <UserCard user={this.state.user} />} 
        />

        <Route 
          path='/followers' 
          render={()=> <FollowerList followers={this.state.followers} />} 
        />

        <Route 
          path='/following' 
          render={()=> <FollowingList followings={this.state.followings} />} 
        />
      </div>
    );
  }
}

export default App;

{/* <UserCard user={this.state.user} /> */}
// {<FollowerList followers={this.state.followers} />
// <FollowingList followings={this.state.followings} />}