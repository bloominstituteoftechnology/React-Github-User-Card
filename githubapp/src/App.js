import React from 'react';
import './App.css';
import User from "./Components/User"
// import Followers from "./Components/Followers"

class App extends React.Component{
  state ={
      user:{},
      followers:[]
    };
  
  componentWillMount(){
    fetch("https://api.github.com/users/zzeroyzz")
    .then((res) => res.json())
    .then((json) =>{
      this.setState({user:json})
      console.log("KH: App.js: CMD: mission successful",this.state.user)
    })
    .catch(err => {
      console.log("error", err)
    })
    fetch("https://api.github.com/users/zoelud/followers")
    .then((res) => res.json())
    .then((json) =>{
      this.setState({ followers:json})
      console.log("KH: App.js: CMD: mission successful",this.state.followers)
    })
    .catch(err => {
      console.log("error", err)
    })
  }
 
render(){
 return(
  <div className="App">
    
    <div className="user">
     <User user={this.state.user}/>
    </div>
    <h2>Followers</h2>
   <div className="followers">
    {this.state.followers.map((follower) =>{
       return<User key={follower.id} user={follower}/>
     })}
    </div>
  </div>
 )
}



}
export default App