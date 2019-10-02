import React from "react";

class Followers extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="followers">
        {this.props.followers.map(followers => {
          console.log("followers", followers);
          return (
            <div className="following" key={followers.id}>
              <img className="image" src={followers.avatar_url}></img>
              <div>
                <p>Github url: {followers.url}</p>
                <p>Username: {followers.login}</p>
                <p>repos: {followers.repos_url}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
