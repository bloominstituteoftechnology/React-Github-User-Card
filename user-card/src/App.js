import React from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';

class App extends React.Component {
  state = {
    user: '', 
    followers: []
  }

  componentDidMount(){
    console.log('CDM')
    axios.get('https://api.github.com/users/hillan1152')
      .then(res => this.setState({
          user: res.data
      }))
      .catch(err => console.log(err));
    this.fetchFollowers();
  }

  fetchFollowers = () => {
    axios.get(`https://api.github.com/users/hillan1152/followers`)
      .then(res => this.setState({
        followers: res.data 
      }));
  }

  render(){
    console.log('Rendering...')
    return ( 
      <div className="App">
        <div className="cardDiv">
          <h1>{this.state.user.name}'s Followers</h1>
          {this.state.followers.map(follower => (
             <Card key={follower.id} followers={follower}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
