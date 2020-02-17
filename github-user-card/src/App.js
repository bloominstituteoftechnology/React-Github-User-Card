import React from "react";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import FollowerProfile from './components/FollowerProfile'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  text-align: center;
  color: white;
`
const FollowersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const AppDiv = styled.div`
  width: 700px;
  background: linear-gradient(90deg, #000000, #FFFFFF);
  font-family: sans-serif;
  text-align: center;
  padding: 10px 0px 10px 0px;
`
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
  componentDidMount = () => {
    //fetch('https://api.github.com/users/adinkins2019')
    axios
      .get("https://api.github.com/users/adinkins2019")
      .then(response => {
        //console.log(response);
        this.setState({
          user: response.data
        });
        //console.log(response.data);
      })
      .catch(err => console.log(err));
    //console.log(this.state.user);

    axios
      .get("https://api.github.com/users/adinkins2019/followers")
      .then(response =>{
        //console.log(response.data)
        this.setState({
          followers: response.data
        })}
      )
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.followers)
    return (
      <AppDiv>
        <StyledH1>My App</StyledH1>
        <UserProfile 
          user={this.state.user} 
        />
        <br/><br/><br/>
        {console.log(this.state.followers)}
       <FollowersContainer>
       {this.state.followers.map(follower => <FollowerProfile key={follower.id}  follower={follower}/>)}
       </FollowersContainer>
      </AppDiv>
    );
  }
}

export default App;

