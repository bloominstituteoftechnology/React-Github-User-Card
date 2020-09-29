import React from 'react';
import './App.css';
import Followers from './Followers'

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      user: []
    }
  }


  componentDidMount() {
    fetch('https://api.github.com/users/sam-lalli')
      .then(res => res.json())
      .then(data => {
        this.setState({
        user: data
        })
    })
    .catch(err => console.log(err))
}

  render() {
    return(
      <div>
        <h1>GitHub Usercard</h1>
        <div className="my-card">
          <h2>{this.state.user.name}</h2>
          <img  width='200'src={this.state.user.avatar_url} alt={this.state.user.name}/>
          <p>Bio: {this.state.user.bio}</p>
          <p>Location: {this.state.user.location}</p>
          <p>Username: {this.state.user.login}</p>
        </div>
        <Followers user={this.state.user} />
      </div>
    )
  }



}

export default App;
