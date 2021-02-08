import React from 'react';
import axios from 'axios';
import './App.css';
import User from './component/User';
import Followers from './component/Followers';


class App extends React.Component{

  state ={
    myData: '',
    followers: []
  }
  //My data
  componentDidMount(){
    axios.get('https://api.github.com/users/Diegormnv')
    .then((res) =>{
      console.log(res.data);
      this.setState({
        myData: res.data
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
      console.log('follower', res.data)
      this.setState({
        followers: res.data
      })
      console.log(this.state.followers)
    })
  }



  render(){
    return(
      <div className='App'>
      <User user={this.state.myData} />
      <button onClick={this.handleClick} >Load Followers</button>
      <Followers followers={this.state.followers}/>
      </div>
    )
  }


}

export default App;
