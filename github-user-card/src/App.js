import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './UserCard'



class App extends React.Component{
  
  state={
    githubData:{},
    inputValue:""

  }


  componentDidMount(){
    axios.get(`https://api.github.com/users/sebastian-espeset`)
      .then((res)=>{
        // console.log(res.data)
        this.setState({
          githubData:res.data
        })
        // console.log(this.state)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  handleChange=(e)=>{
    this.setState({
      inputValue:e.target.value
    });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.inputValue}`)
      .then((res)=>{
        this.setState({
          githubData:res.data
        })
      
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  render(){
    return(
      <div>
        <h1>Welcome to GitHub user card!!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="search for a user" onChange={this.handleChange}></input>
          <button>Find a user</button>
        </form>
        <p><img width="200px" height="200px"src={this.state.githubData.avatar_url} key={this.state.githubData.avatar_url}/></p>
        <UserCard props={this.state.githubData}/>

      </div>
    )
  }
}
export default App;
       



