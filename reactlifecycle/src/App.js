import React from 'react';
import './App.css';
import Card from './card';
import axios from 'axios';

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
      </header>
    </div>
  );
}
}

export default App;
