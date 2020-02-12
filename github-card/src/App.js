import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  state ={
    userData: [],
    followersList:[],
    username: 'haase1020',
    followersData:[]
  };

  componentDidMount(){
    axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
      console.log("debug1", res)
      this.setState({
        userData: [res.data]
      });
      console.log("debug2", this.state.userData)
    })
    .catch(err => console.log("error message", err));

    axios
    .get(`https://api.github.com/users/haase1020/followers`)
    .then(res => {
      console.log("debug3", res)
      this.setState({
        followersList: res.data
      });
      console.log("debug4", this.state.followersList)
      this.state.followersList.map(follower => {
        console.log("debug5", follower.login)
        axios
        .get(`https://api.github.com/users/${follower.login}`)
        .then(res => {
          console.log("debug6",res)
          this.setState({
            followersData: [...this.state.followersData, res.data]
          });
          console.log("debug7", this.state.followersData)
        })
        .catch(err => console.log("error here", err));
      })
    })
    .catch(err => console.log("error here", err));
    console.log("debug8", this.state.followersData)
  }
  render(){
    return(
      <div className="App">
        <h1>User Card For GitHub</h1>
        <UserCard followers= {this.state.followersData} userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
