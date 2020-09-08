import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card.js'
import Followers from './Followers.js'

class App extends React.Component {
  state={
    me: {},
    stalking: []
  }
  
  componentDidMount(){
    axios.get('https://api.github.com/users/danielterry2121')
    .then(res=>{
      this.setState({me:res.data})

    })
    .catch(err=>alert("error"));
    axios.get('https://api.github.com/users/danielterry2121/following')
    .then(res=>{
      this.setState({stalking:res.data});
    })
  }

  render(){
  return (
  
    <div className = "App">
      <h1>My Git Info:</h1>
    <Card daniel={this.state.me} />
    <h2>Stalking..</h2>
     <Followers stalks={this.state.stalking}/>
    </div>
     );
  }
}

export default App;
