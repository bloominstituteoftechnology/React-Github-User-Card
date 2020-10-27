import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import CardList from './Components/CardList'


var users=['rnasir826']

class App extends Component {

  state = {
    people: []
    };

componentDidMount() {
  axios.get(`https://api.github.com/users/rnasir826/following`)
  .then(res=>
    {
      res.data.map(u => {
        users=[...users,u.login]
      })
     users.map(myProfile => {
        axios
      .get (`https://api.github.com/users/${myProfile}`)
      .then(res => {

        var person={
          img:res.data.avatar_url,
          name:res.data.name,
          username:res.data.login,
          followers:res.data.followers,
          following:res.data.following,
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
      <div className="MyInfo">
          <h1>Me and a group of legends! 👨🏽‍💻👩🏼‍💻 </h1>
      </div>
      <div class="cards"></div>
      <CardList people={this.state.people}/>
  </body>
    </div>
  );
}}
export default App;