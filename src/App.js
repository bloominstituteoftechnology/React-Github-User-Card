import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserSheet from './Components/UserSheet'
import './App.css';



class App extends React.Component{

  
  constructor(){
    super()
    this.state = {
      user: [],
      followers: []
    }   
  }
  
  componentDidMount() {
    axios
      .get('https://api.github.com/users/HernandezM-dev')
      .then(res => {
        // console.log(res.data)
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        debugger
        console.log(err)
      });
      axios
      .get('https://api.github.com/users/HernandezM-dev/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        debugger
        console.log(err)
      });
  }

  render(){
      return (
        <div className="App">
          <Typography variant='h1' color='secondary'>GitHub User!</Typography>
          <UserSheet followers={this.state.followers} user={this.state.user}/>
      </div>
    );
  }
}

export default App;
