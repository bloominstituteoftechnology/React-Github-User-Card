import React from "react";

class GitDisplay extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.data.login}</h2>
        <img src={this.props.data.avatar_url} />
        <p>Type: {this.props.data.type}</p>
        <p>Public Repos: {this.props.data.public_repos}</p>
        <p>Followers: {this.props.data.followers}</p>
        <p>Followong: {this.props.data.following}</p>
      </div>
    );
  }
}
export default GitDisplay;
