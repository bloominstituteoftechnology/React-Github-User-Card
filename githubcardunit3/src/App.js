import "./App.css";
import React from "react";
import getGitCard from "./Utility/index";
import GitDisplay from "./Components/gitDisplay";
class App extends React.Component {
  state = {
    githubUser: [],
    input: "tylerpmatthews",
  };

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefualt();
    getGitCard(this.state.input)
      .then((res) => {
        this.setState({
          githubUser: res.data,
        })
      })
      .catch((err) => {
        console.log("Axios error", err.response);
      });
  };

  componentDidMount() {
    getGitCard(this.state.input).then((res) => {
      this.setState({
        githubUser: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              value={this.state.input}
              onChange={this.onChange}
              placeholder="Enter Github username"
            />
            <button>Submit</button>
          </form>
        </div>
        {this.state.githubUser === undefined ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <GitDisplay data={this.state.githubUser} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
