import React from 'react';
import axios from 'axios'
import User from './components/user'
import Followers from './components/followers'
import './App.css';

const userLink = 'https://api.github.com/users/bradleyhubbs'
const followLink = 'https://api.github.com/users/bradleyhubbs/followers'

class App extends React.Component{
  state = {
    user: [],
    followers:[]
  }


componentDidMount() {
  axios.get(userLink)
  .then(res => {
    this.setState({
      user: res.data
    })
  })
  .catch(err => {
    console.log(err);
  })

  axios.get(followLink)
  .then(res => {
    this.setState({
      followers: res.data
    })
  })
  .catch(err => {
    console.log(err)
  })
}



  render() {
    console.log("App Renders");
    return(
      <div className="App">
        <User user={this.state.user} />
        <Followers followers={this.state.followers}/>
      </div>
    )
  }

}
export default App;
