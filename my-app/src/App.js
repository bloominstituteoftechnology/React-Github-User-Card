import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./UserCard";
import axios from "axios";
import FriendCard from "./FriendCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: {},
      friendCard: []
    }

  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/VitaliyM3`)
    .then(res => this.setState({ userCard: res.data }));

    axios.get('https://api.github.com/users/VitaliyM3/followers')
    // .then(res => console.log(res, "this is resposnse for freinds card"))
    .then(res => this.setState({ friendCard: res.data }))
    .catch(err => console.log(err, "error from .catch"));

    // fetch("https://api.github.com/users/VitaliyM3")
    //   .then(res => console.log(res))
    //   .then(users => this.setState({ userCard: users.data }))
    //   .catch(err => console.log("There is an error", err));
  }
  

  render() {
    return (
      <div className="App">
        <h1>React Github User Cards</h1>
        {/* <h1> {this.state.userCard.login} </h1> */}
        <UserCard user={this.state.userCard} className="user">
          {/* {this.state.userCard.map(user => {
          return <div>hello</div>
          })} */}
        </UserCard>
        <FriendCard friend={this.state.friendCard} className="friend">
        </FriendCard>
      </div>
    );
  }



}

export default App;
