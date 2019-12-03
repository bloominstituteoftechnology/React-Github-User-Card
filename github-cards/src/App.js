import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      followers: []
    }
  }

    componentDidMount() {
      this.fetchApiData()
    
  }

  fetchApiData = userName => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then(res => {
        this.setState({ user: res.data})
      })
  }

  render() {
  return (
    <div className="App">
      
    </div>
  );
}
}

export default App;
