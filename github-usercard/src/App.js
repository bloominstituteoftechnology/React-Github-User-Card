import React from "react";
import axios from "axios";
import UserCardContainer from "./Component/UserCardContainer";
import "./App.css";

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
    const { user } = this.state;
    return <UserCardContainer user={user} />;
  }
}

export default App;
