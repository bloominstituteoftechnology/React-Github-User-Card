import React from 'react';
import axios from 'axios';
import User from './components/User'
import Followers from './components/Followers'
import './App.css';

class App extends React.Component{
  state = {
    user: [],
  };

  componentDidMount(){
    axios
    .get(`https://api.github.com/users/maggieprice`)
    .then(res => {
      this.setState({
        user: res.data
      });
      console.log(res);
    })
    .catch(err => console.log(err));

    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          Github User Cards
        </header>
        <div className="user-card">
           <User user={this.state.user}/></div>
           <div > 
           <Followers followers={this.state.followers}/> 
           </div>
        
      </div>
      );
    
  }
}
export default App;
