import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './components/UserCard';
import FollowerCard from './components/FollowersCard'


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    };
  }

  async componentDidMount() {
    console.log("App: componentDidMount called!");
      try {
        const UserData = await axios.get(
          "https://api.github.com/users/CoryDMurray"
        );
        const FollowerData = await axios.get(
          "https://api.github.com/users/CoryDMurray/following"
        );
        this.setState({
          users: UserData.data,
          followers: FollowerData.data
        });
      } catch(err){
        console.log(err);
      }
  };

  
  
  render() {
    console.log(this.state.users)
    console.log(this.state.followers)
    return  <div className= "App-header">
      <UserCard users = {this.state.users}/>
      <div className="followers-container">
        <FollowerCard followers= {this.state.followers}/>
      </div>
    </div>
  }
  
};

export default App;
