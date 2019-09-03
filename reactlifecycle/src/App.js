import React from 'react';
import './App.css';
import Card from './card';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    console.log('constructor invoked!')
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    console.log('CDM invoked!')
    axios.get('https://api.github.com/users/connorholly11')
    // .then(response => response.json())
    // .then((response) => console.log(response))
    .then(response => this.setState({users: response.data}) )
  }


  render() {
  console.log(this.state)
  return (
    <div className="App">
      <header className="App-header">
        <h1>HELLO WORLD</h1>
        {/* <h1>{this.state.name}</h1> */}
        <Card users={this.state.users}/>
      </header>
    </div>
  );
}
}

export default App;
