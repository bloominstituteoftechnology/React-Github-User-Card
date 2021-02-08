import React from "react";
import "./index.css";
import axios from "axios";
import User from "./Components/User";
import Followers from "./Components/Followers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/brennenoconnor`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => {
        console.log("Error!", err);
      });
    axios
      .get(`https://api.github.com/users/brennenoconnor/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => {
        console.log("Error!", err);
      });
  }

  render() {
    return (
      <div className="App">
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}
export default App;
