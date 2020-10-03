import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        user: []
    }
  }

  componentDidMount() {
    console.log ('CDM invoked')
    axios
      .get('')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log('error', err));
  }

  render() {
    return (
      <h1>GIT HUB USERS</h1>
    )

  
  }
}

  
export default App;