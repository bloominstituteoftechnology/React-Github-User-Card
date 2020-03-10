import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './Card';
import './lambdalogo.png';
import './githublogo.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      // followers: ''     
    };
  }  

  componentDidMount() {
    axios
      .get('https://api.github.com/users/Pete1701')
      .then(res => {   
        console.log(res.data)     
        this.setState({
          user: res.data.name
        });
      })
      .catch(err => console.log(err.message));

      // axios
      // .get('https://api.github.com/users/Pete1701/followers')
      // .then(res => {   
      //   console.log(res.data)     
      //   this.setState({
      //     followers: res.data.map(() => {
      //       return res.data.login;
      //     })
      //   });
      // })
      // .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src="./lambdalogo.png" alt="Lambda Logo"/>
          <p>❤️'s</p>
          <img src="./githublogo.png" alt="GitHub Logo" />
        </div>
        <div className="cards">
          {this.state.user}
          {/* {this.state.followers} */}
        </div>
      </div>
    );
  }  
}

export default App;
