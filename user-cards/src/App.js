import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    userCards: data,
  };
  constructor(props) {
    super(props);
    console.log("bk: App.js: App: constructor: constructor was run");
    this.state = {
      pokemon: [],
      otherkey: "",
      listformdata: "",
      otherformdata: "",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
