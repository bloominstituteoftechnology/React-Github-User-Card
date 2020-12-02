import React from 'react';
import './App.css';
import axios from 'axios';
//import components
import fetchUsers from './components/fetchUser'


class App extends React.Component {
  state = {
    users: {},
    input: "",
    followers: []
  }

  componentDidMount(){
    fetchUsers("katieolson84")
      .then((res) => {
        console.log(res)
        this.setState({
          users:res
        });
      })
    axios
      .get(`https://api.github.com/users/katieolson84/followers`)
      .then((res)=> this.setState({followers:res.data}))
      .catch(err=> console.log(err));
    }
  


  onChange = (e) => {
    this.setState({
      input:e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
    fetchUsers(this.state.input)
      .then(res => {
        this.setState({
          users: res
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>GitHub User Cards</h1>
        </header>
        <form onSubmit={this.onSubmit}>
          <label>
            Find a User:
            <input
            type="text"
            value={this.state.input}
            placeholder='enter username'
            onChange={this.onChange}
            />
          </label>
          <button>Search</button>
        </form>
        <div className="user-card">
          <img width="200" src={this.state.users.avatar_url} alt={this.state.users.avatar_url} key={this.state.users.avatar_url}/>
          <div className="user-details">
          <h2>Name: {this.state.users.name}</h2>
          <h2>User Name: {this.state.users.login}</h2>
          <h2>Following: {this.state.users.following}</h2>
          <h2>Followers: {this.state.users.followers}</h2>
          </div>
          <div>
            <h2>Followers of {this.state.users.name}:</h2>
          </div>
          <div>
            {this.state.followers.map(follower =>
              <div className="follower-card" key={follower.id}>
                <img width="100" className='follower-photo' src={follower.avatar_url} alt={follower.avatar_url}/>
                <h2>User Name: {follower.login}</h2>
              </div>
              )}
          </div>
        </div>
      </div>
    );
  };
}


export default App;
