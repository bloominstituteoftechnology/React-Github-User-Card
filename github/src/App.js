import React from "react";
import "./App.css";

import UserProfile from "./components/UserProfile";
import Followers from "./components/Followers";
import UserForm from "./components/UserForm";

class App extends React.Component {
  state = {
    username: "andrewsohrabi",
  };

  setUsername = (name) => {
    this.setState({
      username: name,
    });
  };

  render() {
    return (
      <div className="App">
        <UserForm setUsername={this.setUsername} />
        <UserProfile username={this.state.username} />
        <Followers username={this.state.username} />
      </div>
    );
  }
}

export default App;
