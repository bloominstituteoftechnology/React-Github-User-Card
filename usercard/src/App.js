import React from 'react';
import './App.css';
import axios from 'axios';
// import Users from './Components/User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'tetondan',
      followers: [],
    };
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/tetondan/followers`)
    .then(response => {
      console.log(response.data);
      this.setState({
        followers: response.data
      })
    // .catch(err => console.log(err))
    });

    // axios.get('https://api.github.com/users/tetondan/followers')
    // .then(response => {
    //   console.log("followers", response.data);
    //   this.setState({
    //     people: response.data
    //   });
    // });
  }

  render() {
    return (
      <div>
        {this.state.followers.map(followers => <div key={followers.id}>{followers.login}</div>)}
      </div>
    );
  }
}
 
    
  

export default App;
