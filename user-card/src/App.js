import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import UserCard from './components/userCard'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
     userData :  []
  }

  }



  componentDidMount() {
       
       fetch('https://api.github.com/users/RyanSWest')
      .then(res => res.json())
 
      .then(res => this.setState({userData: res}))

         
      
        
        .catch(err => console.log ("ERR", err))
         
       
       console.log("YO!!",this.state.userData)

  //   axios.get('https://api.openbrewerydb.org/breweries')
  //   .then(res => this.setState({users: res.data}))
  //   .then(res=> console.log (res.data))
  //    .catch(err => console.log(err))
     

  //   console.log( "RES2",this.state.users)

  }


  render(){

    console.log( "HERE22",this.state.userData)
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

      <UserCard data={this.state.userData}/>
    </div>
  );}
}

export default App;
