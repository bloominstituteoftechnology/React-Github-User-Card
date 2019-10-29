import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    users: [], 
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/hillan1152')
      .then(res => this.setState({
        users: res.data
      }))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
