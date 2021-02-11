import { Component } from "react";
import axios from "axios";

export default class UserProfile extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.props.username}`)
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      axios
        .get(`https://api.github.com/users/${this.props.username}`)
        .then((res) => {
          this.setState({ user: res.data });
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    if (!this.state.user) return <h3>Loading user data...</h3>;

    return (
      <div style={{ padding: "64px" }}>
        <img
          src={this.state.user.avatar_url}
          alt={this.state.user.name}
          style={{ borderRadius: "50%", maxWidth: "200px" }}
        />
        <h3>{this.state.user.name}</h3>
        <p>username: {this.state.user.login}</p>
        <p>repos: {this.state.user.public_repos}</p>
        
      </div>
    );
  }
}
