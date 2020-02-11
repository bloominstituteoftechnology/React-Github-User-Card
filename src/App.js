import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  state = {
    userData: [],
    followersList:[],
    username:'caw442000'

  };

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log("this is the response", res)
        this.setState({
          userData: [res.data]
        });
        console.log("this is personal data", this.state.userData)
      })
      .catch(err => console.log("error", err));

      axios
      .get(`https://api.github.com/users/caw442000/followers`)
      .then(res => {
        console.log("this is the followers response ", res)
        this.setState({
          followersList: res.data
        });
        console.log("this is followers data", this.state.followersList)
      })
      .catch(err => console.log("error", err));
  }

  
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard followers= {this.state.followersList} userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
