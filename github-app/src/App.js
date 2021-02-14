import React from 'react'
import './App.css';
import axios from 'axios'

import Followers from './components/Followers'


class App extends React.Component {
  constructor(){
    super();
    console.log('App Constructor')
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    //Api Call will go here 
    console.log('App CDM')
    axios.get('https://api.github.com/users/dujules23')
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          user: res.data
        })
      
      })
      .catch(err => console.log(err))
  }
  

  componentDidUpdate(){
    console.log('App CDU')
  }
  
  render(){
    console.log('App Rendering')
    
  return (
    <div  className="App">
      <h1 className="App-title">Git Hub User</h1>
      
      
            <div className="user-card">
            
                <img className="user-image" alt="userAvatar" src={this.state.user.avatar_url}></img>
                <div className="user-info">{this.state.user.name}</div>
                <div className="user-info">{this.state.user.login}</div>
                <div className="user-info">{this.state.user.location}</div>
                <Followers follower={this.state.user} className="user-info"  />
            </div>
      
         
     
        
    </div>
  );
}
}

export default App;
