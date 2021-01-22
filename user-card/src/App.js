import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    userCards: {},
    followers: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users/Ryguy244")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // console.log("rc: App.js: App: CDM: fetch result: ", json);
        if (json.status !== "error") {
          this.setState({ userCards: json });
        }
      })
      .catch((err) => console.error("failure to fetch card: ", err.message));
    fetch("https://api.github.com/users/Ryguy244/followers")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log("rc: App.js: App: CDM: fetch result: ", json);
        if (json.status !== "error") {
          this.setState({ followers: json });
        }
      })
      .catch((err) => console.error("failure to fetch card: ", err.message));
  }
  render() {
    return (
      <div className="App">
        <div className="myCard">
          <Card userCards={this.state.userCards} />
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
