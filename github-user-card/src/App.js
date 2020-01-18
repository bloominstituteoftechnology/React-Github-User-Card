import React from 'react';
import './App.css';
import axios from "axios";

import FollowerCard from "./components/FollowerCard";
import UserCard from "./components/UserCard";

class App extends React.Component {

  // componentWillMount() {
  //   getFollowers();
  // }

  state = {
    listFollowers: [],
    originalList: [],
    searchTerm: ""
  }

  componentDidMount() {

    // Fetching My GitHub Followers
    axios
      .get('https://api.github.com/users/Heart8reak/followers')
      .then((response) => {
        this.setState({
          listFollowers: response.data,
          originalList: response.data
        })
        console.log(this.state)
      })
      .catch(err => console.log(err))

    // Fetching My User on GitHub 
    axios
      .get("https://api.github.com/users/Heart8reak")
      .then(res => {
        console.log("fetching User Data:", res);
        this.setState({
          name: res.data.name,
          img: res.data.avatar_url,
          followers: res.data.followers,
          url: res.data.html_url,
          login: res.data.login,
          location: res.data.location,
          repos: res.data.public_repos
        });
      })
      .catch(err => console.log("error on fetch:", err));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("SearchTerm: we have a state change!")

      const characters = this.state.originalList.filter(char =>
        char.login.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      this.setState({
        listFollowers: characters
      })
      console.log(this.state)
    }
  }

  render() {
    return (
      <div className="App">

        <h1>GitHub User:</h1>
        <UserCard
          login={this.state.login}
          img={this.state.img}
          url={this.state.url}
          followers={this.state.followers}
          listFollower={this.state.listFollower}
          location={this.state.location}
          repos={this.state.repos}
          following={this.state.following}
        />

        <h1>GitHub Followers:</h1>
        <div>
          <form>
            {/* <label>Search </label> */}
            <input
              onChange={this.handleChange}
              type="text"
              name="searchTerm"
              value={this.state.searchTerm} placeholder="Search "></input>
          </form>
          <br />
        </div>
        <div className="follower-section">
          {this.state.listFollowers.map(item => (
            <FollowerCard
              // className="follower-cards"
              key={item.id}
              loginFollow={item.login}
              imgFollow={item.avatar_url}
            />
          ))}
        </div>

      </div>
    )
  }
};



export default App;
