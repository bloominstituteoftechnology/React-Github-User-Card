import React from 'react';
import NavigationBar from './Components/NavigationBar'
import Followers from './Components/Followers';
import './App.css';

class App extends React.Component {
 state = {
        userProfileData: {}
  };  

  componentDidMount() {
    fetch('https://api.github.com/users/Wade-Coplen')
      .then(res => res.json())
      .then(data => { 
        console.log('fetch: data: ', data);
        this.setState({ ...this.state, userProfileData: data})
  })
      .catch(err => console.log('error on fetch: ', err));

  }
  
  render() {
    return (
      <div className="App"> 
        <NavigationBar />        
        <Followers />
          <h3>{this.state.userProfileData.name}</h3> 
          <img 
              width= '250'
              src= {this.state.userProfileData.avatar_url}
              alt= 'null'
               />  
          <p>{this.state.userProfileData.url}</p>
          <p>Located: {this.state.userProfileData.location}</p>
          <p>Public Repos: {this.state.userProfileData.public_repos}</p>
          <p>Followers: {this.state.userProfileData.followers}</p>
        
      </div>                                 
    );
    
  }  
}
export default App;
