import React from 'react';
import './App.css';
import User from  "./components/User"
import Followers from "./components/Followers"
// import Followers from "./Components/Followers"

class App extends React.Component{
  state ={
      user:{},
      followers:[]
    };
  
  componentWillMount(){
    fetch("https://api.github.com/users/zzeroyzz")//fetching zzeroyzz github 
      .then((res) => res.json())
      .then((json) =>{
        this.setState({user:json})
        console.log("KH: App.js: CMD: mission successful",this.state.user)
      })
      .catch(err => {
        console.log("error", err)
      })
      
    fetch("https://api.github.com/users/zoelud/followers") //fetching zzeroyzz github followers
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
  <div className="bg" />
    <div className="header">
      <h1>Github Cards</h1>
    </div>
    <div className="user-card">
      
     <User user={this.state.user}/>
    </div>
    <div className="header">
    <h2> Followers</h2>
     </div>
   <div className="followers">
    {this.state.followers.map((follower) =>{ //setting up the array for zzeroyzz followers 
       return<User key={follower.id} user={follower}/>
     })}
    </div>
  </div>
 )
}



}
export default App