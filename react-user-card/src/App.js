import React from "react";
import "./App.css";

//Display Data

class App extends React.Component {
  state = {
    username: "tzonglian",
    userData: {},
    userFollowers: [],
  };

  componentDidMount() {
    this.fetchUser(this.state.username);
    this.fetchFollowers(this.state.userFollowers);
  }

  //Fetch User's Data and Followers
  fetchUser = async (username) => {
    await fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          ...this.state,
          userData: data,
        });
        console.log(this.state);
      })
      .catch((err) => console.log("error: ", err));
  };

  fetchFollowers = async (username) => {
    await fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(this.state);
        this.setState({
          ...this.state,
          userFollowers: data,
        });
      })
      .catch((err) => console.log("error: ", err));
  };

  render() {
    return (
      <div className="App">
        <h1>Github User Card using React</h1>
        <br></br>
        <div className="cards">
          {/* Display User Data */}
          <div className="card">
            <img
              src={this.state.userData.avatar_url}
              alt={"user's profile picture"}
            />
            <div className="card-info">
              <h3 className="name">{this.state.userData.name}</h3>
              <p className="username">{this.state.userData.login}</p>
              <p>Location: {this.state.userData.location}</p>
              <p>
                Profile:
                <a href={this.state.userData.html_url}>
                  {this.state.userData.html_url}
                </a>
              </p>
              <p>Followers: {this.state.userData.followers}</p>
              <p>Following: {this.state.userData.following}</p>
              <p>Bio: {this.state.userData.bio}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
