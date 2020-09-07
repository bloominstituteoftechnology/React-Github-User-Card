import React, { Component } from "react";

import UserCard from "./components/UserCard";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    //this.state = {};
  }

  render() {
    return (
      <div>
        <UserCard />
      </div>
    );
  }
}

export default App;
