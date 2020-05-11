import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'


class App extends Component{
  render() {
    const loading = true;

 

    return (
      <div className='App'>
       <Navbar /> 
       <div className="container">
        <Users />
       </div>
       
      </div>
    );
  }
}

export default App;
