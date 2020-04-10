import React from "react";
import "./styles.css";

//styling
import { Dimmer, Loader } from "semantic-ui-react";

//axios
import axios from "axios";

//components
import CardWrapper from "./components/CardWrapper";

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    defaultUser: "Ariels713"
  };

  componentDidMount() {
    //make userName dynamic for search function
    axios
      .get(`https://api.github.com/users/${this.state.defaultUser}`)
      .then(res => this.setState({ user: res }))
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.user !== this.state.user) {
      axios
        .get(`https://api.github.com/users/${this.state.defaultUser}/followers`)
        .then(res => this.setState({ followers: res.data }))
        .catch(err => console.log(err));
    }

    if (prevState.defaultUser !== this.state.defaultUser) {
      axios
        .get(`https://api.github.com/users/${this.state.defaultUser}`)
        .then(res => this.setState({ user: res }))
        .catch(err => console.log(err));
    }

    // if (prevProps.defaultUser !== this.state.defaultUser) {
    //   axios
    //     .get(`https://api.github.com/users/${this.state.defaultUser}`)
    //     .then(res => this.setState({ user: res }))
    //     .catch(err => console.log(err));
    // }
  }

  searchUser = searchEntry => {
    // const newUser = {
    //   userName: searchEntry
    // };
    this.setState({ defaultUser: searchEntry });
  };

  render() {
    console.log("DefaltUser", this.state.defaultUser);
    return (
      <div className="App">
        {this.state.user.length === 0 ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          <CardWrapper
            userData={this.state.user}
            followers={this.state.followers}
            searchUser={this.searchUser}
          />
        )}
      </div>
    );
  }
}

export default App;
