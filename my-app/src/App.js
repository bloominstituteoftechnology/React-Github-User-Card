import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from "./UserCard";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userCard: {}
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/VitaliyM3`)
    .then(res => this.setState({ userCard: res.data })
      
    )

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
      </div>
    );
  }



}

export default App;
