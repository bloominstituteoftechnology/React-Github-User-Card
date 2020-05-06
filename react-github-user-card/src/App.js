import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';


class App extends React.Component {
//constructor to set state
  constructor(){
    super();
    this.state= {
      userData: [],
      followers: []
    }
  }


  componentDidMount(){
    //get my git hub user data via axios
    axios
    .get("https://api.github.com/users/erictaylor103")
    .then(response => {
      this.setState({
        userData: response.data
      });
      //console.log(response.data)
      
    })
    .catch(error => console.log(error));

    //get the followers via axios
    axios
    .get("https://api.github.com/users/erictaylor103/followers")
    .then(response => {
      this.setState({
        followers: response.data
      });
      console.log(response.data)
    })


  }


  //render components
  render(){
    return (
      <div className="App">
        <h1>Github User</h1>
        <UserCard userData={this.state.userData}></UserCard>
        <FollowerCard followers={this.state.followers}></FollowerCard>
        
      </div>
      
    );
  }


}

export default App;

