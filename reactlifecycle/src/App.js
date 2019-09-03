import React from 'react';
import logo from './logo.svg';
import './App.css';

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
    fetch('https://api.github.com/users/connorholly11')
    .then(response => response.json())
    .then((response) => console.log(response))
    .then(card => this.setState({users: card}) )
    
  }


  render() {
  console.log('render invoked!')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Github Card</h1>
      </header>
    </div>
  );
}
}

export default App;
