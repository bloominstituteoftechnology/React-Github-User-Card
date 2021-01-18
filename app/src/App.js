import React from 'react';
import axios from 'axios';
import './App.css';

import UserCard from './Components/UserCard';
import FollowerCard from './Components/FollowerCard';
import { Button, Form, Input } from 'reactstrap';

const followers = [];
const user = [];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "Veilios",
      user: [],
      followers: []
    };
  };
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      ...this.state,
      username: e.target.value
    });
  };

  componentDidMount() {
    console.log("Component did mount");
    axios
      .get(`https://api.github.com/users/Veilios`)
      .then((res) => {
        console.log("Res", res.data)
        this.setState({
          ...this.state,
          user: res.data
        });
        console.log("User", user, followers);
        this.getFollowers();
      })
      .catch((err) => console.log("Error 1", err));
      ;
  };

  componentDidUpdate(PrevState) {
    console.log("Component did Update");
    if (PrevState !== this.state.user) {
      console.log("User has changed")
    }
  };

  getUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          ...this.state,
          user: res.data
        });
        console.log(user);
        this.getFollowers();
      })
      .catch((err) => console.log("Error 2", err))
  };

  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res => {
        console.log("followers", res.data);
        this.setState({
          ...this.state,
          username: "",
          followers: res.data
        });
      }))
      .catch((err) => {
        console.log("Error 3", err);
      });
  };

  render() {
    return (
      <div className="app">

        <div className="header" >
          <h1>
            Github User
          </h1>
          <Form>
            <Input type="text" className="user-search" onChange={this.handleChange} value={this.state.username} placeholder="Github Username" />
            <Button className="formButton" color="info"  onClick={this.getUser} >Find User</Button>
          </Form>
        </div>

        <div className="Main" >
          <UserCard user={this.state.user} />
        </div>

        <div>
          <FollowerCard followers={this.state.followers} />
        </div>

      </div>
    );
  }
}

export default App;