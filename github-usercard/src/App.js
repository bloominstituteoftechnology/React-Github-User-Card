import React from 'react';
import './App.css';
import UserCard from './UserCard';
import SaraCard from './SaraCard';

class App extends React.Component {
  render() {
    return (
      <div>
        <SaraCard />
        <h1>Lambda Students in Github</h1>
        <select value={this.props.name} onChange={this.handleChange}>
          <option value="name">Name</option>
          <option value="location">Location</option>
          <option value="profile">Profile</option>
          <option value="bio">Bio</option>
          <option value="followers">Followers</option>
        </select>
      
      <UserCard />
       
        
        </div>
    )
  }
}

export default App;

