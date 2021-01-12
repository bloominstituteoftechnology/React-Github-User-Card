import React from 'react';
import axios from 'axios';
import './App.css';
import User from './component/User';

class App extends React.Component{

  state ={
    users: []
  }
  //My data
  componentDidMount(){
    axios.get('https://api.github.com/users/Diegormnv')
    .then((res) =>{
      console.log(res.data);
      this.setState({
        users: res.data
      })
    })
    .catch((err) =>{
      console.log(err, 'error')
    })
  }


  
  //followers data
  handleClick= evt =>{
    evt.preventDefault();
    axios.get('https://api.github.com/users/Diegormnv/followers')
    .then((res) =>{
      this.setState({
        users: res.data
      })
    })
  }



  render(){
    return(
      <div>
      <User users={this.state.users} />
      <button onClick={this.handleClick} >Load Followers</button>
      </div>
    )
  }


}

export default App;
