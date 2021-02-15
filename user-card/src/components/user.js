import React from "react";
import axios from "axios";
import Followers from "./followers";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.user !== prevProps.user) { //ALWAYS DO
      console.log(">>>>>", this.props.user.followers_url);
      axios
        .get(this.props.user.followers_url)
        .then((res) => {
          console.log("Initial Data Fetch From Followers API Call", res.data);
          this.setState((prevState) => ({
            ...prevState,
            followers: res.data,
          }));
          console.log("profile followers", this.state.followers);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div className="card">
          <img src={user.avatar_url} alt={user.login}></img>

          <h1 className="name">{user.name}</h1>
          <h3>Location: {user.location}</h3>
          <h4>User Name: {user.login}</h4>
          <h4>About Me: {user.bio}</h4>
          <p></p>
        </div>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default User;
