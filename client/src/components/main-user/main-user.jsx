import React, { Component } from "react";
import FollowerList from "../followers-list/followers-list";
import "./main-user.scss";

class MainUser extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      followerUrl: null,
    };
  }
  componentDidMount() {
    const { mainUser } = this.props;
    console.log(mainUser);
    this.setState({
      user: mainUser,
      followerUrl: mainUser.followers_url,
    });
  }
  render() {
    const { user, followerUrl } = this.state;
    return (
      <div>
        {user && (
          <div>
            <p>{user.login}</p>
          </div>
        )}
        {user ? <FollowerList followerUrl={followerUrl} /> : null}
      </div>
    );
  }
}

export default MainUser;
