import "./App.css";
import React from "react";
import UserCard from "./components/UserCard";
import User from "./components/User";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/SJMucho")
      .then((res) => {
        this.setState({
          ...this.state,
          users: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>USERS</h1>
        {this.state.users &&
          this.state.users.map((users) => {
            return <img width="200" key={users} src={users} />;
          })}
      </div>
    );
  }
}

export default App;
