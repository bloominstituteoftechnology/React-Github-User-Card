import React from 'react';
import axios from 'axios';
import './App.css';

import UserList from './components/UserList';

class App extends React.Component {
  // initialize state
  state = {
    userData: [],
    username: 'KrystalGuzman',
    followerData: []
  };

  componentDidMount() {
    this.fetchUser(this.state.username)
    this.fetchFollowers(this.state.username)
  }
  fetchUser = user => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(res => {
        // res.data.message
        this.setState({
          userData: res.data
        });
      })
      .catch(err => console.log(err));
  };

  fetchFollowers = user => {
    axios
      .get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        console.log(res.data)
        // res.data.message
        let followersResData = res.data;
        followersResData.forEach(element => {
          axios
            .get(`https://api.github.com/users/${element.login}`)
            .then(res => {
              let followers = res.data;
              this.setState({
                followerData: [...this.state.followerData, followers]
              });
              console.log(this.state.followerData);
            })
            .catch(err => console.log(err));
        })
      })
      
  };
  
  

  render(){
    return (
      <div className="App">
        <div className="follower"></div>
        <UserList 
          userData={this.state.userData}
          followerData={this.state.followerData}
        />
      </div>
    );
  }
}

export default App;