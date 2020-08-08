import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor() {
    console.log("Constructor")
    super();
    this.state = {
      users: [] ,
      login: ""
    }
  }

  componentDidMount() {
    console.log("CDM running")
    axios
    .get('https://api.github.com/users/lizhagag')
    .then((res) => {
      this.setState({users: res.data});
      console.log(this.state)
    })
    .catch((err)=> console.log('Axios Err', err))
  }
  
  componentDidUpdate(prevState) {
    if (prevState.users !== this.state.users) {
      console.log("User Has Changed")
    }
    if (prevState.login !== this.state.login) {
      console.log("State Updated, user Followers", this.state.login)
    }
  }

  fetchUsers = () => {
    axios
    .get(`https://api.github.com/users/${this.state.login}`)
    .then((res) => {
      this.setState({ users: res.data })
      console.log( this.state )
    })
    .catch((err) => console.log(err))
  }

  handleChanges = e => {
    console.log("handleChanges Called")
    this.setState({
      ...this.state,
      login: e.target.value
    })
  }

  render () {
    return (
      <div>
        <input
          type="text"
          value={this.state.login}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchUsers}>Search Users</button>
        <div>
          <img src={this.state.users.avatar_url} alt='profile '/>
          <div>
            <p>Bio: {this.state.users.bio}</p>
            <p>Followers: {this.state.users.followers}</p>
            <p>Following: {this.state.users.following}</p>
            <a href={this.state.users.html_url}>Visit Their Profile!</a>
          </div>
        </div>
      </div>
      );
  }
 
}

export default App;
