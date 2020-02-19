import React from 'react';
import UserCard from './UserCard.js'
import './App.css';
import FollowerCard from './FollowerCard.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/lucaslarrubia')
      .then(res => res.json())
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log('Error getting user', err));

    fetch('https://api.github.com/users/lucaslarrubia/followers')
      .then(res => res.json())
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log('Error getting followers', err))
  }

  render() {
    return (
      <div className="App">
        <h1>Github User:</h1>
        {this.state.users.map(item => (
        <UserCard 
        img={item.avatar_url}
        name={item.name}
        login={item.login}
        /> 
        ))}
        <h2>Followers:</h2>
        {this.state.followers.map(item => (
        <FollowerCard 
        name={item.name}
        img={item.img}
        login={item.login}
        />
        ))}
      </div>
    )
  }
}


export default App;
