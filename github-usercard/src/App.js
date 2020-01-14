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
    console.log(`3. cDM`)
    axios
      .get("https://api.github.com/users/nwkendall")       
      .then(initialRes => {
        console.log(`this is initialRes.data:`, initialRes.data)
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
      console.log(`this is res.data:`, res.data)
      this.setState({
        followers: res.data
      })        
    })
    .catch(err => {
      console.log(`this is err:`, err)
    })
  }

  render() {
    console.log(`2. Render`)
    return (
      <div 
        className="App"
        style={{marginLeft: "5%", marginRight: "5%"}}>
        <Profile me={this.state.me}/>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
