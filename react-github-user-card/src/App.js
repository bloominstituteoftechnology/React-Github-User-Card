import React from 'react';

import './App.css';
import axios from 'axios'
import User from './Components/User';
import Followers from './Components/Followers';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: []
    };
}
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/dterran2`)
      .then(res => {
        console.log('here is the res', res)
        this.setState({ user: res.data})
      })
      .catch(err => {
        console.log('here is the ',err)
      })
      axios
      .get(`https://api.github.com/users/dterran2/followers`)
      .then(res => {
        console.log('here is the list of followers', res)
        this.setState({ followers: res.data})
      })
      .catch(err => {
        console.log('here is the ',err)
      })
  }

  

render() {
  return (
    <div className="App">
      <User user={this.state.user}/>
      <Followers followers={this.state.followers}/>
  
    </div>
  );
}
}

export default App;
