import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
  }

  componentDidMount() {
    this.getUsers("mbenson3434");
  }
  
  getUsers = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        console.log(res);
        this.setState({
          users:res.data
        });
        
      })
      .catch(err => {
        console.log('There is an errorerr');
      })
  }
  
  render() {
    return (
      <div className="App">
        <h1>GitHub Trading Cards</h1>
        <div>
          {
            <div>
            <img src={this.state.users.avatar_url} alt=""></img>
            <h1>{this.state.users.name}</h1>
            <p>Username: {this.state.users.login}</p>
            <p>Bio: {this.state.users.bio}</p>
            </div>
          
          }
        </div>
      </div>
    );
  }
}
export default App;
