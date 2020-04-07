import React from 'react';
import axios from "axios"
import Usercard from './Components/Usercard'
import './App.css';


class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      userData: [],
      followers:[]
    }
  }


  componentDidMount()
  {
    let userName = "GeraldRyan"
    axios.get(`https://api.github.com/users/${userName}`)
      .then(response =>
      {
        this.setState({
          userData: response.data
        })
        console.log(response.data)
      })
      .catch("You caught me")

      axios.get(`https:api.github.com/users/${userName}/followers`)
      .then(response =>{
        this.setState({
          followers: response.data
        })
        console.log(response.data)
      })
  }

  componentDidUpdate()
  {
    console.log("component did update")
  }


  render()
  {


    return (
      <div className="App">
        <h1>Github User Info</h1>
        <Usercard userData={this.state.userData} followers={this.state.followers}></Usercard>
        
      </div>
    );
  }
}



export default App;
