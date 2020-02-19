import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from "./components/UserCard.js"
import Followers from "./components/Followers.js"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: {},
      followers: []
    }
  }

  fetchUser = () => {
    axios.get(`https://api.github.com/users/ali-dervisoglu`)
      .then(result => {
        this.setState({
          user: result.data
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/ali-dervisoglu/followers`)
      .then(result => {
        console.log(result);
        this.setState({
          followers: result.data
        })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }


  componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

  render() {
    return (
      <div>
        <UserCard key={this.state.user.login} {...this.state.user} />
        <Followers followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;
