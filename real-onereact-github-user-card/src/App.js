import React from 'react'
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    name:'',
    userName :'',
    avatarUrl : '',
    bio: '',
    followers:null,
    following:null,
    publicRepos:null
}

componentDidMount (){
  axios.get("https://api.github.com/users/brandonx1123")
  .then((res) => {
    console.log(res);
    this.setState({
    name: res.data.name,
    userName : res.data.login,
    avatarUrl : res.data.avatar_url,
    bio: res.data.bio,
    followers:res.data.followers,
    following:res.data.following,
    
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

handleChange = e =>{
this.setState({
  username: e.target.value
});
}

handleClick = e => {
  e.preventDefault();
  axios.get(`https://api.github.com/users/${this.state.username}`)
  .then (res => {
    this.setState({
      name: res.data.name,
      username:res.data.login,
      avatarUrl : res.data.avatar_url,
      bio: res.data.bio,
      followers:res.data.followers,
      following:res.data.following,
      
    })
  })
}
  render(){
    return (
      <div className="App">
        <h1>Welcome To GitHub User Search :)</h1>
       <form className ="form">
        <input classname ='search' placeholder='search' type="text" onChange={this.handleChange}></input>
        <button className ='searchBtn' onClick={this.handleClick}>Search Users!</button>
       </form>
       
       <div className ="userCard">
        <h2>{this.state.name}</h2>
        <img src ={this.state.avatarUrl} alt ='avatar pictures'/>
        <p>Username:{this.state.username}</p>
        <p>Bio: {this.state.bio}</p>
        <p>Followers: {this.state.followers}</p>
        <p>Following:{this.state.following}</p>
       </div>
      </div>
    );
  }
  }
  

export default App;
