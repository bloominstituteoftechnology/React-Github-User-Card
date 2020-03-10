import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gitHub: [], followers: []
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/Mitch98k')
    .then(res => {
      this.setState({gitHub: res.data});
      console.log(res);
    })
      .catch(err => console.log(err));

      axios.get('https://api.github.com/users/Mitch98k/followers')
    .then(res => {
      this.setState({followers: res.data});
      console.log(res);
    })
      .catch(err => console.log(err));
  };
 
    
  
  render() {
    return (
      <div className="App">
        <h1>My Github</h1>
        {this.state.gitHub}
        <h1>My Followers</h1>
        {this.state.followers.map(follower => follower.login)}
      </div>
    );
  }
}
export default App;
