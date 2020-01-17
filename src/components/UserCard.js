import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <img src={this.props.follower.avatar_url} />
        <h3>{this.props.follower.login}</h3>
        <a href={this.props.follower.html_url}> Profile </a>
      </div>
    );
  }
}

export default UserCard;
