import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowersCard";
import { Button } from "reactstrap";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    userSearch: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/bkoehler2016")
      .then(res => {
        this.setState({
          user: [res.data]
        });
        console.log(res.data);
      })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/bkoehler2016/followers")
      .then(res => {
        this.setState({ followers: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  findUser = event => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then(res => {
        console.log(res);
        this.setState({ followers: res.data });
        console.log(this.state);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
        <input
          type="text"
          value={this.state.userSearch}
          onChange={this.handleChange}
          name="userSearch"
        />
        <Button onClick={this.findUser}>Find User</Button>
        {this.state.user.map(item => (
          <UserCard
            key={item.id}
            name={item.name}
            login={item.login}
            bio={item.bio}
            img={item.avatar_url}
            url={item.html_url}
            location={item.location}
          />
        ))}
        <h2>Followers:</h2>
        <div className="followers">
          {this.state.followers.map(item => (
            <FollowerCard
              key={item.id}
              login={item.login}
              img={item.avatar_url}
              url={item.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
