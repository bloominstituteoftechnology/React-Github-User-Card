import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './component/UserList';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div className="App">
      Hello from App!
      <UserList/>
      
      </div>
    )
  }
} 
