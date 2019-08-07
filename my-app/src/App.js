import React from 'react';
import axios from 'axios';

import './App.css';
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      gitHubData : {},
      gitHubFollowers : {}
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
    console.log(this.state.gitHubData)
      })

      //Fetchs the followers of the github user
    axios.get(`https://api.github.com/users/allenben746/followers`)
      .then(response =>{
        const gitHubFollowers = response.data;
        this.setState({
          gitHubFollowers : gitHubFollowers
        })
        console.log("Followers ->", this.state.gitHubFollowers)
      })
    .catch(err => {
      console.log(`Error in fetching data: ${err}`);
    })
  }


  render(){
    return (
      <>
      <div>My App</div>
      <UserCard />
      </>
    )
  }



}

export default App;
