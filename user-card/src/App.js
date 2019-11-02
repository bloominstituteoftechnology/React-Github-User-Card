import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Following from './components/follow';
import UserCard from './components/userCard'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
     userData :  [],
     following: []
  };

   

  }


  

  componentDidMount() {
       
       fetch('https://api.github.com/users/RyanSWest')
      .then(res => res.json())
 
      .then(res => this.setState({userData: res}))
 
      
        
        .catch(err => console.log ("ERR", err))
         
       
      


        fetch('https://api.github.com/users/Zealll/followers')
        .then(res => res.json())
        .then(res=> this.setState({following: res}))
    
        // .then(res=> console.log("F___REZ", res))
         .catch(err => console.log(err))
    
    

  }


  render(){

    console.log( "HERE22",this.state.userData)
    console.log ("FOLLOWERS::", this.state.following)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React User Card</h1>
            
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <UserCard data={this.state.userData} following={this.state.following}/>
      <Following  following = {this.state.following}/> 
    </div>
  );}
}

export default App;
