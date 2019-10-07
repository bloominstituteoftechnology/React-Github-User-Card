import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      
      user: []

    }
  }

  fetchUserData = () => {
    axios.get(`https://api.github.com/users/jason-aviles`)
      .then(result => {
        this.setState({
          user: result
        })
      })
      .catch(error => {
        console.log('errror', error)
      })
  }

  componentDidMount(){
    this.fetchUserData()
  }

  
  render(){

    console.log(this.state, 'app')

    return (
      <>
        <h1>Github User</h1>

        <UserCard
          user ={this.state.user}

        />
      </>
    )
  }
}

export default App;
