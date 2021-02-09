import React from "react";
import "./App.css";
import axios from "axios";
import GitDisplay from "./GitDisplay";
import styled from "styled-components";
const StyledApp = styled.div`
  h2 {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  form {
    text-align: center;
  }

  input {
    margin: 2%;
    border: solid 2px;
  }
  label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  button {
    font-size: 1.1rem;
    border-radius: 5px;
  }
`;

const fetchGit = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log("Axios error has occured");
    });
};
class App extends React.Component {
  state = {
    gitcard: [],
    input: "",
  };
  componentDidMount() {
    fetchGit("tylerpmatthews").then((res) => {
      this.setState({
        gitcard: res.data,
      });
    });
  }

  onChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    fetchGit(this.state.input).then((res) => {
      this.setState({
        gitcard: res.data,
        input: "",
      });
    });
  };
  render() {
    return (
      <StyledApp>
        <header>
          <h2>GitHub User-Card</h2>
          <form onSubmit={this.onSubmit}>
            <label>
              Search a GitHub Username
              <input
                type="text"
                value={this.state.input}
                onChange={this.onChange}
              />
            </label>
            <button>Search</button>
          </form>
        </header>
        <div>
          <GitDisplay gitcard={this.state.gitcard} />
        </div>
      </StyledApp>
    );
  }
}

export default App;
