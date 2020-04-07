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
      userData: []
    }
  }

  componentDidMount()
  {
    axios.get(`https://api.github.com/users/GeraldRyan`)
      .then(response =>
      {
        this.setState({
          userData: response.data
        })
        console.log(response.data)
      })
      .catch("You caught me")
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
        <Usercard userData={this.state.userData}></Usercard>
        
      </div>
    );
  }
}



export default App;
