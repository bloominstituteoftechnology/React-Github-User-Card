import React from 'react'
import axios from 'axios'
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      user: [],
      giHubFollowers:[]
    
    }

  }
  componentDidMount () {
    axios
      .get('https://api.github.com/users/SayadiFWD')
      .then(res => {
      console.log(res.data)
        this.setState({
          user: res.data
        })
      })
     
      .catch(err =>{
        console.log(err)
      });

      axios
      .get("https://api.github.com/users/SayadiFWD/followers")
      .then(res =>{
        console.log(res)
        this.setState({
          giHubFollowers:res.data
        })
      })
      










  }

  render() {
    return (
      <div className="App">
  <p> Name: {this.state.user.name}</p>
  <p> User Login: {this.state.user.login}</p>
  <p> User ID: {this.state.user.id}</p>
  <p> Number of Followers: {this.state.user.followers}</p>
  <p>Number of Following: {this.state.user.following}</p>
  
    <img width="200" src={this.state.user.avatar_url}/>
  
<div>
  <h1>Followers</h1>
{this.state.giHubFollowers.map(follow =>{
    return(
      <div>
        <p>{follow.login}</p>
        <img width="150" src={follow.avatar_url}/>
        <a href={follow.events_url}/>
      </div>
    )
  })}
</div>
    
      </div>
    );
  }
}

export default App
