import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  state = {
    personalData: [],
    followersList:[]

  };

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/caw442000`)
      .then(res => {
        console.log("this is the response", res)
        this.setState({
          personalData: [res.data]
        });
        console.log("this is personal data", this.state.personalData)
      })
      .catch(err => console.log("error", err));

      axios
      .get(`https://api.github.com/users/caw442000`)
      .then(res => {
        console.log("this is the response", res)
        this.setState({
          personalData: [res.data]
        });
        console.log("this is personal data", this.state.personalData)
      })
      .catch(err => console.log("error", err));
  }

  
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
        <UserCard personalData={this.state.personalData} />
      </div>
    );
  }
}

export default App;
