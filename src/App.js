import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  state = {
    userData: [],
    followersList:[],
    username:'caw442000',
    followersData:[]


  };

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log("this is the original username response", res)
        this.setState({
          userData: [res.data]
        });
        console.log("this is the User Data", this.state.userData)
      })
      .catch(err => console.log("error", err));

      axios
      .get(`https://api.github.com/users/caw442000/followers`)
      .then(res => {
        console.log("this is the followers response ", res)
        this.setState({
          followersList: res.data
        });
        console.log("this is follower List", this.state.followersList)
        this.state.followersList.map(follower => {
          console.log("login", follower.login)
          axios
          .get(`https://api.github.com/users/${follower.login}`)
          .then(res => {
            console.log("this is the follower login response", res)
            this.setState({
              followersData: [...this.state.followersData, res.data]
            });
            console.log("this is Followers data", this.state.followersData)
          })
          .catch(err => console.log("error", err));
        })
      })
      .catch(err => console.log("error", err));
      console.log("this is followers data", this.state.followersData)
      
      
      


  }

  
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard followers= {this.state.followersData} userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
