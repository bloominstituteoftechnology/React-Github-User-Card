import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gitHub: []
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/Mitch98k')
    .then(res => {
      this.setState({gitHub: res.data});
      console.log(res);
    })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <h1>My Github</h1>
        {this.state.gitHub}
      </div>
    );
  }
}
export default App;
