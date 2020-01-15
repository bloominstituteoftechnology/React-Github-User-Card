import React from 'react';
import axios from 'axios';
import UsrPge from './components/UserPage';
import FollowPage from './components/FollowPage';

class App extends React.Component { 
    state = {
      aaron:[],
      followersArray:[]
    }
  componentDidMount() {
    const URL = 'https://api.github.com/users/anders529';
    const FOLLOWERS = 'https://api.github.com/users/anders529/followers'
    axios.get(`${URL}`)
      .then(response => 
        {
        this.setState({
          aaron: response.data
        }) 
        axios.get(`${FOLLOWERS}`)
        .then(response => {
          this.setState({
            followersArray: response.data
          })
        })
      })
        .catch(error => {
          console.log(error);
        })
    }
  render() {
    return  (
     <>
        <UsrPge data={this.state.aaron}/>
        
        <FollowPage data={this.state.followersArray}/>
     </> 
    );
  }}
export default App;