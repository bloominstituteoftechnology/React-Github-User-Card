import React from 'react';
import './App.css';
import axios from "axios"
import UserCard from "./components/user-card.js"


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users:[],
      followers:[],
      followerData:{}
  }
  }
  
  

  componentDidMount() {
    axios.get(`https://api.github.com/users/kmallen91`)
    .then (res => {
      console.log(res.data)
      this.setState ({
        users:res.data
      })
    })
    .catch(err => console.log('ERROR'));
    axios.get(`https://api.github.com/users/kmallen91/followers`)
    .then (res => {
      console.log(res.data)
      this.setState({
        followers: res.data
      })
      })
    .catch(err => console.log('ERROR'));
    this.state.followers.forEach(e => {
    axios.get(`https://api.github.com/users/${e.login}`)
    .then (res => {
      console.log(res.data)
        this.setState({
          followerData:res.data
        
        })
        
      })            
    .catch(err => console.log('ERROR'));
    })
  };



render() {
return (

    <div className="App">
      <h2> Placeholder </h2>
      <UserCard 
      data={this.state.users}
      />
      <UserCard 
      data={this.state.followerData}
      />
    </div>
  );
}

}

export default App;
