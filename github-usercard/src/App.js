import React from "react";
import axios from "axios";
import UserCardContainer from "./Component/UserCardContainer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/yirano")
      .then(res => {
        console.log(res);
        this.setState({ user: res });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <UserCardContainer />;
  }
}

export default App;
