import React from 'react';
import axios from 'axios';

import './App.css';
import UserCard from "./components/UserCard";
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      gitHubData : {},
      gitHubFollowers : []
    }
  }
  
  componentDidMount(){
    //Fetches general data around the github user
    axios.get(`https://api.github.com/users/allenben746`)
      .then(response => {
        const gitHubData = response.data;
        this.setState({
          gitHubData : gitHubData
        })
      })

      //Fetchs the followers of the github user
    axios.get(`https://api.github.com/users/allenben746/followers`)
      .then(response =>{
        const gitHubFollowers = response.data;
        console.log(response.data)
        this.setState({
          gitHubFollowers : gitHubFollowers
        })
        console.log("Testing ->", gitHubFollowers)
      })
    .catch(err => {
      console.log(`Error in fetching data: ${err}`);
    })
  }

  render(){
    return (
      <>
      <h1>GitHub Information using React.JS</h1>

      <UserCard data= {this.state} />

      {this.state.gitHubFollowers.map(follower => {
        console.log(follower)
        return(
          <FollowerCard follower={follower} />
        )
      })}
      </>
    )
  }



}

export default App;
