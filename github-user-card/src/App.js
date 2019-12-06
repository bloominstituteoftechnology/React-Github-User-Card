import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      login: 'carlostbanks',
      followernames: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.login}`)
      .then(result => {
        this.setState({
          name: result.data.name,
          bio: result.data.bio,
          followers: result.data.followers,
        })
      })
      axios.get(`https://api.github.com/users/${this.state.login}/followers`)
      .then(res => {
        this.setState({ followernames: res.data })
        console.log(res)
    })
      .catch(error => {
        console.log('error:', error)
      })
  }

  // componentDidUpdate = () => {
  //   axios.get(`https://api.github.com/users/${this.state.login}/followers`)
  //     .then(res => {
  //       this.setState({ followernames: res })
  //       console.log(res)
  //   })
      
  //     .catch(error => console.log('error:', error));
  // }

  render() {
    return (
      <>
        <h1>Github User Card</h1>
        <div>
          <h1>Name: {this.state.name}</h1>
          <h3>Bio: {this.state.bio}</h3>
          <h3>Number of followers: {this.state.followers}</h3>
        </div>

        <div>
          This user's followers:
          {this.state.followernames.map((followername) => (
            <li login={followername.login}
                id={followername.id}
            />
          ))}
        </div>
      </>
    )
  }
}

export default App;
