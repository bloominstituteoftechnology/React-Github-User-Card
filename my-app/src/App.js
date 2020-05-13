
import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import UserCard from "./Components/UserCard";
import Followerscard from "./Components/FollowersCard";


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
        followersData: response.data
      });
      console.log(response.data)
    })
  }

  

  render() {
    return (
      <div className="App">
          <h1>GitHub UserCard</h1>
            <div className="alldata">
              <UserCard userData={this.state.userData} className="user"></UserCard>
              <Followerscard 
              followersData={this.state.followersData}
              >
              </Followerscard>
          </div>
        <main />
      </div>
    );
  }
}

export default App;