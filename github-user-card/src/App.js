import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import UserCard from "./component/UserCard"
import FollowerCard from './component/FollowerCard';

import styled from 'styled-components';

const FollowerDiv = styled.div`
    color: dodgerblue;
    background-color: lightgrey;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      dataSet: [],
      followerDataSet: []
    }
    //can I assign two seperate states? Send them to two seperate
    //components?
    // this.state = {
    //   followerDataSet: []
    // }
  }
  
  componentDidMount() {
    Axios.get("https://api.github.com/users/wtrawlings")
    .then(response => {
      console.log(response.data)  ;
      this.setState({ dataSet: response.data })
    });
    Axios.get("https://api.github.com/users/wtrawlings/followers")
    .then(response => {
      console.log(response.data);
      this.setState({ followerDataSet: response.data })
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>GET THIS THING WORKING!!!</h1>
        <h2>from inside the render of class App</h2>
        <UserCard 
          dataSet={this.state.dataSet} 
          />
        <FollowerDiv>
          <p>...here are some of my friends...</p>
        <FollowerCard
          followerDataSet={this.state.followerDataSet}
        />
        </FollowerDiv>
      </div>
    );
  }
  
}

export default App;
