import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import styled from 'styled-components';

//app container styles
const AppContainer = styled.div`

.followers-title{
  font-size: 50px;
  text-align:center;
}

`

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
    //get my git hub user data via axios and update userData state
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
      <AppContainer>
      
        
        <UserCard userData={this.state.userData}></UserCard>
        <br />
        <br />
        <br />
        <h1 className="followers-title">Followers</h1>
        <FollowerCard followers={this.state.followers}></FollowerCard>
        
      
      </AppContainer>
      
    );
  }


}

export default App;

