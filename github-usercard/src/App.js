import React from "react";
import UserCardContainer from "./Component/UserCardContainer";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UserCardContainer />;
  }
}

export default App;
