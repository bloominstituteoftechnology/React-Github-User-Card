import { Component } from "react";
import axios from "axios";

const fetchUser = (url) => {
  return axios
    .get(url)
    .then((res) => {
      this.setState({
        followers: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export default class Followers extends Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    fetchUser(
      `https://api.github.com/v2/users/${this.props.username}/followers`
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      fetchUser(
        `https://api.github.com/v2/users/${this.props.username}/followers`
      );
    }
  }

  render() {
    return (
      <div style={{ display: "flex", flexFlow: "row wrap" }}>
        {this.state.followers.map((follower) => (
          <div
            key={follower.id}
            style={{
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              width: "160px",
              margin: "10px",
              padding: "16px",
            }}
          >
            <img
              src={follower.avatar_url}
              alt={follower.login}
              style={{ borderRadius: "50%", maxWidth: "130px" }}
            />
            <h4>{follower.login}</h4>
          </div>
        ))}
      </div>
    );
  }
}
