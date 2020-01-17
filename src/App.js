import React from "react";
import "./App.css";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowerCard from "./components/FollowersCard";

class App extends React.Component {
  state = {
    user: [],
    followers: []
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

  render() {
    return (
      <div className="App">
        <h1>GitHub User</h1>
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
