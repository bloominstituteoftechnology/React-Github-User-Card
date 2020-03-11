import React from 'react';
import axios from 'axios';
import User from './user';
import Follow from './follow'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={}
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/padgettriver")
    .then(response => {
      this.setState(response.data)
      console.log(response)
    })
    .catch(error=> {
      console.log('error', error)
    })
  }

  
  render(){
    return(
      <div>
     <User users={this.state}/>
        </div>
      
    )
  }
}



export default App;
