import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/userCard';
import FollowerCard from './components/FollowerCard'

class App extends React.Component {
state={
  github:[],
  followers:[]
}
componentDidMount(){
  axios
    .get('https://api.github.com/users/treywroberts')
      .then(res=>{
        // console.log(res.data)
        this.setState({
          github: res.data
        })
      })
      .catch(err =>{

      })
    axios
    .get('https://api.github.com/users/treywroberts/followers')
      .then(res =>{
        console.log(res)
        this.setState({
          followers:res.data
        })
      })
      .catch(err=>{

      })
}
  render(){
    console.log(this.state)

    return (<div>
      <UserCard github={this.state.github}/>
      <FollowerCard followers={this.state.followers}/>
    </div>
      
  );
}
}

export default App;
