import React from 'react';

import axios from "axios";
import './App.css';
import Display from "./Display";
import FollowersDisplay from "./FollowersDisplay"; 

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          users: [],
          followers: []
      };
  };

componentDidMount() {
  axios.get("http://localhost:5000/api/players").then(response => {
    this.setState({
      users: response.data,
      // userName: ""
    });
  });
            axios.get("https://api.github.com/users/Drewcifer88/followers").then((res) => {
                console.log(res.data);
                this.setState({
                    followers: res.data,
                });
            });
    }

render() {
  return(
    <>
      <h1>Hello World</h1>
      <div>
        {console.log("user info", this.state.users)}
        {console.log("followers info", this.state.followers)}
        <Display state={this.state.users}/>
        <FollowersDisplay 
            followers={this.state.followers}
            key={this.state.followers}
            />
      </div>
      </>
    );
  }
};

export default App;