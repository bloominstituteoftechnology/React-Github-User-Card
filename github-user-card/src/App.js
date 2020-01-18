import React from 'react';
import './App.css';
import axios from "axios";

import FollowerCard from "./components/FollowerCard";
import UserCard from "./components/UserCard";

class App extends React.Component {
  state = {
    user: [],
    follower: []
  }

  componentDidMount() {

    const followerArray = [
      "pguzman26",
      "wizardor",
      "aanderson9313",
      "adrianbparra",
      "banksleisha",
      "AniiGar",
      "SFMack",
      "jschaben",
    ]

    followerArray.map(item => {
      axios
        .get(`https://api.github.com/users/${item}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            follower: [...this.state.follower, res.data]
          })
          // .catch(err => console.log("Error:", err))
        })
    })

    axios
      .get("https://api.github.com/users/Heart8reak")
      .then(res => {
        console.log("fetching User:", res);
        // console.log("res", res.json)
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          followers: res.data.followers,
          listFollower: res.data.followers_url,
          url: res.data.url,
          login: res.data.login
        });
        console.log("name", res.data.name)
        console.log("img", res.data.avatar_url)
        console.log("followers", res.data.followers)
        console.log(this.state)
      })
    // .catch(err => console.log("error on fetch:", err));
  }


  render() {
    // console.log(this.state.followers)
    return (
      <div className="App">

        <h1>GitHub User:</h1>
        <UserCard
          name={this.state.name}
          login={this.state.login}
          img={this.state.img}
          url={this.state.url}
          followers={this.state.followers}
          listFollower={this.state.listFollower}
        />




        <h1>GitHub Followers:</h1>
        <div className="follower-section">
          {this.state.follower.map(item => (
            <FollowerCard
              // className="follower-cards"
              key={item.id}
              login={item.login}
              img={item.avatar_url}
              url={item.html_url}
            />
          ))}
        </div>

      </div>
    )
  }
};



export default App;
