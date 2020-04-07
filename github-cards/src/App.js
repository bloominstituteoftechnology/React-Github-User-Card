import React from 'react';
import axios from "axios"
import Usercard from './Components/Usercard'
import Followercard from './Components/Followercard'
import Form from './Components/Form'
import './App.css';


class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      userData: [],
      followers: [],
      userName: "GeraldRyan"
    }
  }


  componentDidMount()
  {

    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(response =>
      {
        this.setState({
          userData: response.data
        })
        // console.log(response.data)
      })
      .catch("You caught me")

    axios.get(`https:api.github.com/users/${this.state.userName}/followers`)
      .then(response =>
      {
        this.setState({
          followers: response.data
        })
        // console.log(response.data)
      })
  }

  componentDidUpdate(prevProps, prevState)
  {
    if (prevState.userName !== this.state.userName)
    {
      axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then(response =>
        {
          this.setState({
            userData: response.data
          })
          // console.log(response.data)
        })
        .catch("You caught me")

      axios.get(`https:api.github.com/users/${this.state.userName}/followers`)
        .then(response =>
        {
          this.setState({
            followers: response.data
          })
          // console.log(response.data)
        })
    }
  }



  searchUser = (e, text) =>
  {
    e.preventDefault()

    this.setState({
      userName: [text]
    })
    // console.log("t is for task:", t)  //pass
    // console.log("tasks:", this.state.tasks)  //pass
    // console.log("newTask:", newTask) //pass
  }


  render()
  {


    return (
      <div className="App">
        <div className="container">
          <h1>Github User Info</h1>
          <Form searchUser={this.searchUser}></Form>
          <h2>User</h2>
          <div className="cards">
            <Usercard userData={this.state.userData} followers={this.state.followers}></Usercard>
          </div>
          <h2>Followers:</h2>
          <div className="cards">
            {this.state.followers.map((item, index) =>
            {
              // console.log("item",item)
              return (<Followercard key={index} userData={item} followers={[]}></Followercard>)
            })}
          </div>
        </div>
      </div>
    );
  }
}



export default App;
