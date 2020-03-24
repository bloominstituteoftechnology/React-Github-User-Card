import React from "react";
import axios from "axios";
import UserCardContainer from "./Component/UserCardContainer";
import Form from "./Component/Form";
import "./css/index.css";

const test = document.querySelector('#graph');
console.log(test);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      gitUser: "yirano",
      followers: "",
      contributions: "",
      input: ""
    };
  }

  getUser = () => {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.gitUser}`
    );
  };

  getFollowers = () => {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/${this.state.gitUser}/followers`
    );
  };

  getContributions = () => {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://github.com/users/${this.state.gitUser}/contributions`
    );
  };

  getData = () => {
    return axios
      .all([this.getUser(), this.getFollowers(), this.getContributions()])
      .then(res => {
        console.log(res);
        this.setState({
          user: res[0].data,
          followers: res[1].data,
          contributions: res[2].data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      gitUser: this.state.input,
      input: ""
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  componentDidMount() {
    return this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gitUser !== this.state.gitUser) {
      return this.getData();
    }
  }

  render() {
    const { user, followers, input, gitUser, contributions } = this.state;
    return (
      <>
        <Form
          input={input}
          gitUser={gitUser}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <UserCardContainer
          user={user}
          followers={followers}
          contributions={contributions}
        />
      </>
    );
  }
}

export default App;
