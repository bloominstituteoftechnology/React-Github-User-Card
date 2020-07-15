import React, { Component } from 'react';
import './App.css';
import UserList from "./components/UserList"
import axios from "axios";

//name: "", login: "", avatar: "", followers: "", following: "", id: ""

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followers: [
        "biskoi", 
        "tetondan", 
        "dustinmyers", 
        "justsml", 
        "luishrd",
        "bigknell"
      ]
    }
  }
  
  //axios(or fetch) call here
  //pass that data to List, which passes that data to UserCard
  componentDidMount() {
    //used axios instead of fetch, because it seemed like it would require a call of the url and then a call of res.url
    console.log("CMD")
    axios.get("https://api.github.com/users/sam-h-hall")
      .then(res => {
        this.setState({
          userData: [...this.state.userData, res.data]
         })
      })
      .catch(err => console.log(err.message))

    setTimeout(this.state.followers.forEach(follower => (
      axios.get(`https://api.github.com/users/${follower}`)
        .then(res => {
          this.setState({
            userData: [...this.state.userData, res.data]
          })
        })
        .catch(err => console.log(err.message))
      )), 100)
  };


  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <UserList userData={this.state.userData} />
      </div>
    )
  }
}

export default App;
