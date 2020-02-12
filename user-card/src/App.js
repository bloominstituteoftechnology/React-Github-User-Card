import React, { Component } from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import "./App.css";

export default class App extends Component {
  state = {
    current_user: "",
    login: "",
    avatarURL: "",
    url: "",
    name: "",
    location: "",
    bio: "",
    followers: [],
    message: "",
    errorMsg: ""
  };

  //for single get request
  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users/david-pok")
  //     .then(res => {
  //       // console.log(res.data);
  //       this.setState({
  //         login: res.data.login,
  //         avatarURL: res.data.avatar_url,
  //         name: res.data.name,
  //         location: res.data.location
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  //for multiple get request
  componentDidMount() {
    axios
      .all([
        axios.get("https://api.github.com/users/david-pok"),
        axios.get("https://api.github.com/users/david-pok/followers")
      ])
      .then(
        axios.spread((userRes, followerRes) => {
          // do something with both responses
          // console.log("USERRES", userRes);
          // console.log("followersRES", followerRes);
          this.setState({
            login: userRes.data.login,
            avatarURL: userRes.data.avatar_url,
            name: userRes.data.name,
            location: userRes.data.location,
            url: userRes.data.html_url,
            bio: userRes.data.bio,
            followers: followerRes.data
          });
        })
      )
      .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   //ALWAYS USE AN IF STATEMENT TO CHECK IF STATE CHANGED
  //   if (prevState.login !== this.state.login) {
  //     //do some stuff here
  //   })
  // }

  handleChanges = e => {
    this.setState({
      current_user: e.target.value
    });
  };

  fetchUser = e => {
    e.preventDefault();
    axios
      .all([
        axios.get(`https://api.github.com/users/${this.state.current_user}`),
        axios.get(
          `https://api.github.com/users/${this.state.current_user}/followers`
        )
      ])
      .then(
        axios.spread((userRes, followerRes) => {
          // do something with both responses
          // console.log("USERRES", userRes);
          // console.log("followersRES", followerRes);
          this.setState({
            login: userRes.data.login,
            avatarURL: userRes.data.avatar_url,
            name: userRes.data.name,
            location: userRes.data.location,
            url: userRes.data.html_url,
            bio: userRes.data.bio,
            followers: followerRes.data,
            message: userRes.data.message,
            errorMsg: ""
          });
        })
      )
      .catch(err => {
        this.setState({
          errorMsg: "Invalid user, please try again"
        });
      });
  };

  render() {
    console.log("state", this.state);
    // if (this.state.current_user == "") {
    //   return (
    //     <div>
    //       <h4>Please enter a GitHub username</h4>
    //       <input
    //         type="text"
    //         value={this.state.current_user}
    //         onChange={this.handleChanges}
    //       />
    //       <button onClick={this.fetchUser}>Get user data</button>
    //     </div>
    //   );
    // }
    return (
      <div className="App">
        <div>
          <h4>Enter another Github user to see their info</h4>
          <input
            type="text"
            value={this.state.current_user}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchUser}>Get user data</button>
          {this.state.errorMsg && (
            <p style={{ color: "red" }}>{this.state.errorMsg}</p>
          )}
        </div>
        <div className='card'>
          {!this.state.errorMsg && (
            <UserCard
              login={this.state.login}
              avatarURL={this.state.avatarURL}
              name={this.state.name}
              location={this.state.location}
              followers={this.state.followers}
              bio={this.state.bio}
              url={this.state.url}
            />
          )}
        </div>
      </div>
    );
  }
}
