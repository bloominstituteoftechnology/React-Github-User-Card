import React from "react";
import "fontsource-roboto";
import requester from "easier-requests";

import {User, Follower} from "./utility";
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
      // get primary user data
      let id = requester.createUniqueID();
      await requester.get("https://api.github.com/users/HarryHenryGebel",
                          id);
      const userData = requester.response(id).data;
      this.setState({userData: new User(userData)});

      // get followers
      id = requester.createUniqueID();
      await requester.get(userData.followers_url, id);
      const followerData = requester.response(id).data;
      console.log(followerData);
      this.setState({userData: new User(userData, followerData)});
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
