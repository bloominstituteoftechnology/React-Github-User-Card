import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './components/userCard';
import AddUserForm from './components/addUserForm';

class App extends Component{
  constructor(){
    super()
    this.state = {
        username: 'dangnlu18',
        usersList: []
    }
  }

  componentDidMount(){
    this.fetchUsers()

  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.username !== this.state.username){
      console.log(this.state.usersList)
      this.fetchUsers()
    }
  }


  fetchUsers = (user = `${this.state.username}`) => {
    axios.get(`https://api.github.com/users/${user}`)
    .then(resp=>{
      console.log(resp)
      this.setState({
      usersList: [...this.state.usersList, resp.data]
      })
    })
    .catch(err =>{
      console.log('error: ', err)
    })

  }

  addUser = (event, user) => {
    const newUser = user
    this.setState({
      username: newUser
    })
  }

 

  render(){
    return (
      <div className="App">
        <h1> GitHub User Cards </h1>
        <AddUserForm addUser={this.addUser}/>
        <div className="users">
          {this.state.usersList.map((item, index)=>{
            return(
              <div className="user-card" key={index}>
                <UserCard detail ={item} />
              </div>
              )
          })}
        </div>
      </div>
    );
  }
}

export default App;
