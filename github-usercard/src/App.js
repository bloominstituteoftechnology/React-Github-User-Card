import React from "react";
import axios from "axios";
import UserCardContainer from "./Component/UserCardContainer";
import Form from "./Component/Form";
import "./css/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      gitUser: "yirano",
      followers: "",
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

  getData = () => {
    return axios
      .all([this.getUser(), this.getFollowers()])
      .then(res => {
        console.log(res);
        this.setState({ user: res[0].data, followers: res[1].data });
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
    console.log("-----SUBMIT-----");
    console.log(this.state.gitUser);
    console.log(this.state.input);
    console.log("----------------");
    this.getData();
  };

  handleChange = e => {
    this.setState({
      gitUser: e.target.value,
      input: e.target.value
    });
  };

  componentDidMount() {
    return this.getData();
  }

  render() {
    const { user, followers, input, gitUser } = this.state;
    console.log("-----RENDER-----");
    console.log(this.state.gitUser);
    console.log("----------------");
    return (
      <>
        <Form
          input={input}
          gitUser={gitUser}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <UserCardContainer user={user} followers={followers} />
      </>
    );
  }
}

export default App;
