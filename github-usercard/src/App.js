import React, { Component } from 'react';
import axios from "axios";

import './App.css';

import logo from './logo.svg';
import FollowerList from "./components/FollowerList"

class App extends Component {
  
  constructor() {
    console.log(`1. Constructor`)
    super();
    this.state = {
      me: "",
      followers: []
    }
  }
  
  componentDidMount(){
    console.log(`3. cDM`)
    axios
      .get("https://api.github.com/users/nwkendall")       
      .then(res => {
        console.log(`this is res.data:`, res.data)
        this.setState({
          me: res.data
        })
        
      })
      .catch(err => {
        console.log(`this is err:`, err)
      })
  }

  render() {
    console.log(`2. Render`)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </header>
        <div>
          <h2>{this.state.me.name}</h2>
        </div>
        <FollowerList followers={this.state.followers}/>

      </div>
    );
  }
}

export default App;
