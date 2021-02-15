import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';
import FollowerCard from './FollowerCard'


class App extends React.Component {
  state = {
    user: {},
    followers: [],
  }
  
  
  componentDidMount() {
    console.log('mounting!')
    axios
      .get('https://api.github.com/users/da-vazquez')
      .then(res => {
        this.setState({...this.state, user: res.data})
      })
      .catch(err => console.log(err))
      
        axios
          .get(`https://api.github.com/users/justsml/followers`)
          .then(res => {
          this.setState({...this.state, followers: res.data})
      })
          .catch(err => console.log('unable to locate followers data', err))
    }
    
  
    


  render() {
  return (
    <div className='container'>
      
    <h1>React Github User Card</h1>
    
    <div className='cards'>
      
    <Card user={this.state.user}/>
    {this.state.followers && this.state.followers.map((follower, index) => {
      return <FollowerCard follower={follower} key={index}/>
      
    })}


  </div>
</div>
    
  )}
}

export default App;
