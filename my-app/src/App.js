
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./Components/UserCard";

class App extends React.Component {
    state= {
      userData: [],
      followersData: []
  }


  componentDidMount() {
    axios
    .get("https://api.github.com/users/lex-marie790").then(response => {
      this.setState({
        userData: response.data
      });
      console.log(response.data)
    })
    
    .catch(error => console.log(error));

    axios
    .get("https://api.github.com/users/lex-marie790/followers")
    .then(response => {
      this.setState({
        followers: response.data
      });
      console.log(response.data)
    })
  }

  

  render() {
    return (
      <div className="App">
        <h1>GitHub UserCard</h1>
      
        <UserCard userData={this.state.userData}></UserCard>
      </div>
    );
  }
}

export default App;