import React from 'react';
import './App.css';
import Card from './card';
import axios from 'axios';
import Followercards from './followercards';

class App extends React.Component {
  constructor(){
    console.log('constructor invoked!')
    super();
    this.state = {
      users: {},
      followers: []
    }
  }

  componentDidMount(){
    console.log('CDM invoked!')
    axios.get('https://api.github.com/users/connorholly11')
    // .then(response => response.json())
    // .then((response) => console.log(response))
    .then(response => this.setState({users: response.data}) )

    axios.get('https://api.github.com/users/connorholly11/followers')
    // .then(response => response.json())
    // .then((response) => console.log(response))
    .then(response => this.setState({followers: response.data}) )
  }




  render() {
  console.log('state', this.state)
  return (
    <div className="App">
      <header className="App-header">
        <Card users={this.state.users}
              followers={this.state.followers}/>

        {this.state.followers.map(follower => {
          return <Followercards login={follower.login}/>
        })}
      </header>
    </div>
  );
}
}

export default App;
