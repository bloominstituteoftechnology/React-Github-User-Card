import React, { Component } from 'react';
import axios from "axios";

import './App.css';

import FollowerList from "./components/FollowerList"
import Profile from "./components/Profile";

class App extends Component {
  
  state = {
      me: "",
      followers: []
    }
  
  componentDidMount() {
    axios
      .get("https://api.github.com/users/nwkendall")       
      .then(initialRes => {
        console.log(`this is "me" state:`, initialRes.data)
        this.setState({
          me: initialRes.data
        })        
      })
      .catch(err => {
        console.log(`this is err:`, err)
      })

    axios
    .get("https://api.github.com/users/nwkendall/followers")       
    .then(res => {
      res.data.forEach(user => {
        axios
          .get(`https://api.github.com/users/${user.login}`)
          
          .then(res => {
            console.log(`this is "res[i]" state:`, res)

            this.setState({
              followers: [...this.state.followers, res.data]
            })        
          })       
        })
      })
    .catch(err => {
      console.log(`this is err:`, err)
    })
  }

  render() {
    return (
      <div 
        className="App"
        style={{ marginLeft: "5%", marginRight: "5%", padding: "1%" }}>
        <Profile me={this.state.me}/>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
