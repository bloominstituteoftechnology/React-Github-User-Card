import React from "react";
import axios from "axios";
import "./App.css";
import UsersCard from "./components/UsersCard";
class App extends React.Component {
  // constructor, super, etc, are all still built into this class, just under the hood
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/RobertElias")
      .then(res => {
        // res.data.message
        this.setState({
          user: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err))
      .finally(res => {
        axios
          .get(`https://api.github.com/users/RobertElias/followers`)
          .then(res => {
            // res.data.message
            this.setState({
              followers: res.data
            });
            console.log(res);
          })
          .catch(err => console.log(err));
      });
  }
  // Stretch Problem
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.doggos !== prevState.doggos) {
  //     console.log("inside first if?");
  //     if (this.state.doggoText === "chihuahua") {
  //       console.log("inside second if?");
  //       axios
  //         .get("https://dog.ceo/api/breed/husky/images")
  //         .then(res => {
  //           // res.data.message
  //           this.setState({
  //             doggos: res.data.message,
  //             doggoText: "husky"
  //           });
  //           console.log(res);
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   }
  // }

  handleChanges = e => {
    this.setState({
      userText: e.target.value
    });
  };

  fetchUsers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/RobertElias/followers`)
      .then(res => {
        // res.data.message
        this.setState({
          followers: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <h1>Hello GitHub Users</h1>
        <input
          type="text"
          value={this.state.userText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUsers}>Fetch Users</button>
        <div className="card">
          <UsersCard user={this.state.user} />
          {this.state.followers.map((follower, i) => (
            <UsersCard user={follower} key={follower.id}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
