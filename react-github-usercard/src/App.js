import React from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./component/User";
import axios from "axios";
import Followers from "./component/Followers";
import {Route} from "react-router-dom";
// import  * from "./component/styles";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
     const gitHubUser = axios.get("https://api.github.com/users/awuorm");
    const gitHubFollowers = axios.get("https://api.github.com/users/awuorm/followers");
    Promise.all([gitHubUser,gitHubFollowers])
      .then(([userRes,followersRes]) => {
        this.setState({
          user: { ...userRes.data },
          followers: [...followersRes.data]
        });
        console.log("response from server", this.state.followers);
      })
      .catch(err => console.log("error from server", err.message));
  }
  render() {
    return (
      <div className="App">
       <Route path="/" render={(props) => <User {...props} user={this.state.user} /> }/>
       <Route path="/followers" render={(props) => <Followers {...props} followers={this.state.followers}/>}/>
        
      </div>
    );
  }
}
