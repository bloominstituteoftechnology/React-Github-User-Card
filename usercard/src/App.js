import React from "react";
import "fontsource-roboto";
import requester from "easier-requests";

import User from "./User";
import UserDisplay from "./components/UserDisplay";

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      userData: new User()
    };
  }

  componentDidMount() {
    this.retrieveUserData();
  }

  async retrieveUserData() {
    try {
      const id = requester.createUniqueID();
      await requester.get("https://api.github.com/users/HarryHenryGebel",
                          id);
      this.setState({userData: new User(requester.response(id).data)});
    }
    catch(error) {
      console.log(error);
      throw error;
    }
  }

  render () {
    return (
      <div>
        <UserDisplay userData={this.state.userData}/>
      </div>
    );}
}
