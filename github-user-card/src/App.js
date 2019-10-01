import React from "react";
import axios from "axios";
import LambdaLogo from "./images/lambdalogo.png";
import GithubLogo from "./images/githublogo.png";
import "./styles.css";
import UserCard from "./Components/UserCard";
import FollowerCards from "./Components/FollowerCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      primaryUserData: [],
      userData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/arizephyr123")
      .then(res => {
        //console.log(res.data);
        this.setState({
          primaryUserData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/arizephyr123/followers")
      .then(res => {
        //console.log("followers data", res.data);
        this.setState({
          userData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={LambdaLogo} alt="Lambda Logo" />
          <span role="img" aria-label="heart emoji">
            ❤️'s
          </span>
          <img src={GithubLogo} alt="GitHub Logo" />
        </div>
        <div className="cards">
          <UserCard primaryUserData={this.state.primaryUserData} />
          {this.state.userData.map(each => {
            console.log(each);
            return (
              <FollowerCards
                key={each.id}
                userData={each}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
