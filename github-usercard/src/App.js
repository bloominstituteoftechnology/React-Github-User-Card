import React from 'react';
import axios from 'axios';

import Card from './Card'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.all([
      axios.get('https://api.github.com/users/niko831'),
      axios.get('https://api.github.com/users/niko831/followers')
    ])
      .then(response => {
        console.log(response)
        this.setState(response.data)
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Card users={this.state.users} />
      </div>
    );
  }
}

export default App;