import React from "react";
import GitHubUserCard from "./components/GitHubUserCard";
import PageHeader from "./components/PageHeader";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followersLinks: [],
      followers: []
    };
  }

  componentDidMount = () => {
    fetch("https://api.github.com/users/adkhiker")
      .then(response => response.json())
      .then(data => this.setState({ ...this.state, user: data }));
    fetch("https://api.github.com/users/adkhiker/followers")
      .then(response => response.json())
      .then(data => {
        this.setState({ ...this.state, followersLinks: [...data] });
        this.state.followersLinks.forEach(follower => {
          fetch(`${follower.url}`)
            .then(response => response.json())
            .then(data =>
              this.setState({
                ...this.state,
                followers: [...this.state.followers, data]
              })
            );
        });
      });
  };

  render() {
    return (
      <div className="App">
        <PageHeader />
        <GitHubUserCard
          followers={this.state.followers}
          user={this.state.user}
        />
        <div class="graph">
          <p>Contributions for Adkhiker:</p>
          <img
            src="http://ghchart.rshah.org/adkhiker"
            alt="Github Chart for Adkhiker"
            title="Github Chart for Adkhiker"
          />
        </div>
      </div>
    );
  }
}

export default App;
