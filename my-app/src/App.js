import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FollowCard from './component/FollowCard';
import UserCard from './component/UserCard';

const followersArray = [
  'noahbibb21',
  'BrandyBecker',
  'nati-alvarez',
  'kdneldor',
  'alphaseinor'
];

class App extends React.Component {
  state = {
    userData: [],
    followData: []
  };

  componentDidMount() {
    axios
    .get('"https://api.github.com/users/noahbibb21')
    .then(res =>  {
      this.setState({
        userData: res.data
      })
    })
followersArray.map(item => {
  axios
  .get(`https://api.github.com/users/${item}`)
  .then(res => {
    this.setState({
      followData: [...this.state.followData, res.data]
      })
     })
    })
  }
  
  render() {
    return (
      <div className="App">
      <h1>GitHub User Card</h1>
      <UserCard userData = {this.state.userData}/>
      <h2>Followers</h2>
      {
        this.state.followData.length === 0 && (<div>Loading</div>)
      }
      <FollowCard followers = {this.state.followData} />
    </div>
    );
  }
}

export default App;
