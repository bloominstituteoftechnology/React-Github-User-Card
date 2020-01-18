import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {
  state = {
    user: {},
    followers: []
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
  }

  render() {
    return (
      <div className="App">
        <h2>User</h2>
        <UserCard user={this.state.user}/>
      </div>
    );
  }
}

export default App;
