import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/YenniLee')
      .then(res => {
        console.log(res.data)
        this.setState({user: res.data})
      })
      .catch(err => console.error("axios error", err))

    axios
    .get('https://api.github.com/users/YenniLee/followers')  
    .then(res => {
      console.log(res.data)
      this.setState({followers: res.data})
    })
    .catch(err => console.error("follower axios err", err))
  }



  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <h1>GitHub User Profiles</h1>
        <UserCard user={this.state.user} />
        <Followers followerData={this.state.followers} />
      </div>
    );
  }
  
}

export default App;
