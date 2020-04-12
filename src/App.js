import React, { Component } from "react";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import Search from "./Components/Users/Search";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    me: {},
    users: [],
    loading: false,
    alert: null
  };

  // UNCOMMENT FOR USERS TO RENDER AT START
  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/pj-wise/followers`
    );

    const myInfo = await axios.get(`https://api.github.com/users/pj-wise`);

    this.setState({ me: myInfo.data, users: res.data, loading: false });
  }
  //end intitial user render

  //SEARCH GITHUB USERS..... PROP DRILLING
  searchUsers = async text => {
    this.setState({ me: {}, loading: true });

    const res = await axios.get(
      // SAME call as above ^ changed endpoint dynamic based on text
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //CLEAR USERS FROM STATE
  clearUsers = () => this.setState({ users: [], loading: false });

  //SET ALERT
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  render() {
    const { loading, users, me } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} me={me} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
