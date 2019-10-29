import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      myData: {},
      followers: []
 
    }
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users/raaudain")
      .then(res => {
        this.setState({
          myData: res.data
        })
      })
      .catch(err => console.log(err))

      axios
        .get("https://api.github.com/users/raaudain/followers")
        .then(res =>{
          //console.log(res.data);
          const user = res.data.map((person)=>{
            //console.log(person)
            return person.login;
          })
          //console.log(user)
          // this.setState({
          //   followers: res.data
          // })
        
          user.forEach(follower =>{
            axios
            .get(`https://api.github.com/users/${follower}`)
            .then(res => {
              const userInfo = Object.values(res).map(info => {
                //console.log(info)
                return info;
              })
              //console.log(userInfo)
              //console.log(Object.values(res))
              this.setState({
                followers: [...this.state.followers, res.data]
              })
              console.log(this.state.followers)
            })
          })
        })
      
      .catch(err => {
        console.log("Sorry went wrong -->", err)
      });

  }
  

  render(){
    return (
      <div className="App">
        <h1>GitHub Followers</h1>
        <div className="follower">
         
            
            <div className="user">
              <img width="300px;" src={this.state.myData.avatar_url} key={this.state.myData.id} alt={this.state.myData.login}/>
              <div className="name">{this.state.myData.name}</div>
              <div>Username: {this.state.myData.login}</div>
              <div>Location: {this.state.myData.location}</div>
              <div>Followers: {this.state.myData.followers}</div>
              <a href={this.state.myData.html_url}>{this.state.myData.html_url}</a>
            </div>

          {this.state.followers.map(follower => (
            
            <div className="user">
              <img width="300px;" src={follower.avatar_url} key={follower.id} alt={follower.login}/>
              <div className="name">{follower.name}</div>
              <div>Username: {follower.login}</div>
              <div>Location: {follower.location}</div>
              <div>Followers: {follower.followers}</div>
              <a href={follower.html_url}>{follower.html_url}</a>
            </div>

          ))} 
        </div>
      </div>
    );
  }
}

export default App;
