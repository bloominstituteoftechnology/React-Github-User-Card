import React from 'react';
import './App.css';
import GitHubCardList from "./components/GitHubCardList";
import GithubUserCard from "./components/GitHubUserCard";
import axios from "axios"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      myData: [],
      myFollowers: []
    }
  }

  componentDidMount() {
    axios
    .get("https://api.github.com/users/HarrisonMS")
    .then(res => {
      this.setState({ myData: res.data })
      console.log("idk", res.data)
    })
    axios
    .get("https://api.github.com/users/HarrisonMS/followers")
    .then(followers => {
      this.setState({myFollowers: followers.data})
      console.log("hopefully followers", followers.data)
    })
    .catch (err => console.log(err))
  }

  render(){
    return(
      <div className="App">
        <GithubUserCard/>
        <GitHubCardList/>
        <h1>{this.state.myData.login}</h1>
        <img src= {this.state.myData.avatar_url}/>
        <h1>{this.state.myFollowers.login}</h1>
      </div>
    )
  }
}
export default App;