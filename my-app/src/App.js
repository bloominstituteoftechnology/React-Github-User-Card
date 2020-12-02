import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/cmirza')
      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      })
      .catch(error => console.error(error))

    axios
      .get('https://api.github.com/users/cmirza/followers')
      .then(response => {
        console.log(response);
        this.setState({ followers: response.data });
      })
      .catch(error => console.error(error))
  };



  render(){
    return (
      
      <div className='App'>
        <div>
          <h1>GitHub Followers</h1>
        </div>
        <div>
          <img src={this.state.user.avatar_url} alt={this.state.user.login}/>
          <p>{this.state.user.name}</p>
          <p>{this.state.user.login}</p>
          <span>Profile: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></span>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
        </div>
        
        {this.state.followers.map(follower =>
          <div className='card' key={follower.id}>
            <p>{follower.login}</p>
          </div> 
          )}

      </div>
    );
  }

}

export default App;
