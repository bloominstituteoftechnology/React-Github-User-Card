import React, { Component } from "react";
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
    const { user } = this.state;
    return (
      <div>
        {user && (
          <div>
            <p>{user.login}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MainUser;
