import React from 'react';
import axios from "axios";
import LambdaLogo from "./images/lambdalogo.png";
import GithubLogo from "./images/githublogo.png";
import "./styles.css";

class App extends React.Component {
constructor(){
  super();
  this.state = {
    userData: [],
    primaryUser: []
  };
}

//functions here


render(){
  return (
      <div class="container">
      <div class="header">
        <img src={LambdaLogo} alt="Lambda Logo"/>
        <p>❤️'s</p>
        <img src={GithubLogo} alt="GitHub Logo" />
      </div>
      <div class="cards"></div>
    </div>
  );
}
 
}

export default App;
