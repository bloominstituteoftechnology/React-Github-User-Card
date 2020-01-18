import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const user = []

class App extends React.Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Adrian-Guadalupe')
      .then(res=> {
        console.log(res.data);
        this.setState({
          ...this.setState,
          user: res.data
        })
      })
      .catch(err=> console.log('NOOOOOO!!!!', err))
  }

  render() {
    return (
      <div className="App">
        <h2>User</h2>
        {/* <UserCard /> */}
      </div>
    );
  }
}

export default App;
