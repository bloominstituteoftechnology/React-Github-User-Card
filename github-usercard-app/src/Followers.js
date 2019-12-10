import React from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

class Followers extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "bkandaris",
      followers: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user != this.state.user) {
      this.setState({
        followers: []
      });
      this.fetchUsers();
    }
  }

  fetchUsers = () => {
    axios
      .get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(result => {
        console.log(result.data);
        this.setState({ followers: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    this.setState({
      user: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1 className="title">Github User Card Project</h1>
        <div className="dropdown">
          <h3>User's Followers:</h3>
          <select value={this.state.user} onChange={this.handleChange}>
            <option value="bkandaris">bkandaris</option>
            <option value="CJStryker">CJ Stryker</option>
            <option value="hdnye">hdnye</option>
            <option value="littleonetwo">littleonetwo</option>
            <option value="zeinab4u">zeinab4u</option>
          </select>
        </div>
        <div className="userCards">
          {this.state.followers.map((user, index) => (
            <Card
              key={index}
              user={user}
              names={user.login}
              imgSrc={user.avatar_url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Followers;
