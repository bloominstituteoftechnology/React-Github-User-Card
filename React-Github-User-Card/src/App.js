import React from 'react';
import axios from 'axios';
import './App.css';
import User from './Components/User';
import SearchUser from './Components/SearchUser';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      input: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/DanielleKoduru')
      .then(res => {
        console.log(res);
        this.setState({
          user: {
            ...res.data,
          }
        });
      })
      .catch(err => console.log(err));

    axios.get(`https://api.github.com/users/DanielleKoduru/followers`)
      .then(res => {
        this.setState({
          followers: [...res.data],
          input: '',
        });
      })
  }

  handleChanges = e => {
    this.setState({
      input: e.target.value
    })
  }

  fetchUsers = (e) => {
    e.preventDefault();
    let username = this.state.input;
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        this.setState({
          user: {
            ...res.data,
          }
        });
      })
      .catch(err => console.log(err));

    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        this.setState({
          followers: [...res.data],
          input: '',
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      console.log("User has changed!");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Users</h1>
        <SearchUser
          handleChanges={this.handleChanges}
          input={this.state.input}
          fetchUsers={this.fetchUsers}
        />
        <User user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;

