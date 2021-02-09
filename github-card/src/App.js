import React from "react"
import axios from 'axios'
import './App.css';
import Card from './component/Card'

class App extends React.Component{
  state={
    card:[],
    followers:[],
    userName:''
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/Gatienorti")
      .then((res)=>{
        // console.log(res.data.name)
        this.setState({
          card: res.data
        })
      })
      .catch(err=> console.log(err))
    axios.get('https://api.github.com/users/Gatienorti/followers')
    .then((res)=>{
      this.setState({
        followers:res.data
      })
      
    })
    .catch(err=> console.log(err))
  }
  

  handleChanges = (event) =>{
    this.setState({
      userName:event.target.value
    })
  }
  fetchUser = () =>{
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then((res)=>{
      this.setState({
        card:res.data
      })
    })
    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
    .then((res)=>{
      this.setState({
        followers:res.data
      })
      console.log(this.state.followers)
    })
  }

render(){
  return (
      <div className="App">
        <h1>Git Hub Card</h1>
        <input type='text' value={this.state.userName} onChange={this.handleChanges}/>
        <button onClick={this.fetchUser}>Upload User</button>
        <Card state={this.state}/>
      </div>
    );
  }
}

export default App
