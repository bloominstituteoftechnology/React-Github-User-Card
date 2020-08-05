import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import lambdalogo from "./lambdalogo.png";
import githublogo from './githublogo.png';
import CardList from './Components/CardList'


var users=["olem22"]
const Instructors = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell',`kempie1`, 'AnastasiiaaaaM', 'DmitriyNoa', 'olem22'];
class App extends Component {

  constructor() {
    super();
    this.state = {
      people:[]
    };
  }

componentDidMount() {
  axios.get(`https://api.github.com/users/olem22/followers`)
  .then(res=>
    {
      res.data.map(u=>{
        users=[...users,u.login]
      })
      console.log(users)
      users.map(p=>{
        axios
      .get (`https://api.github.com/users/${p}`)
      .then(res => {
      
        var person={
          img:res.data.avatar_url,
          name:res.data.name,
          username:res.data.login,
          followers:res.data.followers,
          following:res.data.following,
          id:res.data.id,
          link:res.data.html_url
        }
        this.setState({
        people: [...this.state.people, person]
          
        })
      })
      .catch(err => {console.log(err)})
    })
})
}
  render(){
  return (
    <div className="App">
      <header>
  </header>
  <body>
    <div class="container">
      <div class="header">
        <img src={lambdalogo} alt="Lambda Logo"/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo"/>
      </div>
      <div className="MyInfo">
        <h1>Me and my Followers</h1>
      </div>
      <div class="cards"></div>
      <CardList people={this.state.people}/>
    </div>
  </body>
    </div>
  );
}}
export default App;
