import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import lambdalogo from './assets/lambdalogo.png';
import githublogo from './assets/githublogo.png';

import GitHubCard from './components/GitHubCard';
import FriendCards from './components/FriendCards';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      gitData: {something: 'filler'},
      friendsData: []
    };
  };

  componentDidMount(){
    axios.get('https://api.github.com/users/paulstgermain')
    .then(res => {
      this.setState({gitData: res.data});
    })
    .catch(err => {
      console.log(err);
    });

    axios.get('https://api.github.com/users/paulstgermain/followers')
    .then(res => {
      this.setState({friendsData: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  };

  render(){
  return (
    <StyledApp className="App">

      <div className="header">
        <img src={lambdalogo} alt="Lambda Logo"/>
        <p>❤️'s</p>
        <img src={githublogo} alt="GitHub Logo" />
      </div>

      <GitHubCard gitData={this.state.gitData} />
      <FriendCards friends={this.state.friendsData} />
      
    </StyledApp>
  );
  }
}

export default App;

const StyledApp = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .header img {
    width: 150px;
    height: 150px;
  }

  .header p {
    font-size: 48px;
  }
`