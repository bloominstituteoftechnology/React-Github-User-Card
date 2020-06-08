import React from "react";
import axios from "axios";

import "./App.css";

import FollowersCard from "./component/Card";
import UsersCard from "./component/UsersCard"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
  }
  componentDidMount() {
    console.log(" Mount running");
    axios.get("https://api.github.com/users/Mustafacajib")
    .then(res=>{
      console.log(res.data)
      this.setState({user: res.data})
    })
    .catch((err) => console.log(err));
    axios
      .get(" https://api.github.com/users/Mustafacajib/followers")
      .then((res) => {
        // console.log(res.data);
        this.setState({ followers: res.data });
        console.log(this.state.followers);
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github</h1>
          <UsersCard user = {this.state.user}/>
          <FollowersCard followers={this.state.followers} />
        </header>
      </div>
    );
  }
}
export default App;
