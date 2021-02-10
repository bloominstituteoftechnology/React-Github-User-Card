import React from 'react'
import axios from 'axios'
import UserCard from './CardComponents/UserCard'
import FollowerCard from './CardComponents/FollowerCard'
import './App.css';

class App extends React.Component {
  state={
    github:[],
    followers:[],
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/blackcatwizard')
      .then(res => {
        this.setState({
          github: res.data
        })
      })
      .catch(err => {'GIT ERROR'})
  }
  render(){
    return (<div>
      <UserCard github={this.state.github}/>
      <FollowerCard followers={this.state.followers}/>
    </div>
    )
  }
}

export default App