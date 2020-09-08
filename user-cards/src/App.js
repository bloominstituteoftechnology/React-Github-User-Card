import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    userCards: {},
    followers: {},
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
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("rc: App.js: App: CDU runs: no props ");
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header userCards={this.state.userCards} />
        </header>
        <div className="myCard">
          <Card userCards={this.state.userCards} />
        </div>
      </div>
    );
  }
}

export default App;
