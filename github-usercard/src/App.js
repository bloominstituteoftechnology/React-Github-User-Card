import React from "react";
import axios from "axios";
import UserCardContainer from "./Component/UserCardContainer";
import "./css/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      followers: ""
    };
  }

  getUser = () => {
    return axios.get("https://api.github.com/users/yirano");
  };

  getFollowers = () => {
    return axios.get("https://api.github.com/users/yirano/followers");
  };

  componentDidMount() {
    axios
      .all([this.getUser(), this.getFollowers()])
      .then(res => {
        console.log(res);
        this.setState({ user: res[0].data, followers: res[1].data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { user, followers } = this.state;
    return <UserCardContainer user={user} followers={followers} />;
  }
}

export default App;
