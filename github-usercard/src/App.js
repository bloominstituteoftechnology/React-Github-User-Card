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
    const { gitUser } = this.state;
  }

  getUser = () => {
    return axios.get(`https://api.github.com/users/${this.state.gitUser}`);
  };

  getFollowers = () => {
    return axios.get(
      `https://api.github.com/users/${this.state.gitUser}/followers`
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ gitUser: this.state.input, input: "" });
    console.log(this.state.gitUser);
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    });
  };

  componentDidUpdate() {
    // this.componentDidMount();
  }

  componentDidMount() {
    axios
      .all([this.getUser(), this.getFollowers()])
      .then(res => {
        console.log(res);
        this.setState({ user: res[0].data, followers: res[1].data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { user, followers, input } = this.state;
    return (
      <>
        <Form
          input={input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <UserCardContainer user={user} followers={followers} />
      </>
    );
  }
}

export default App;
