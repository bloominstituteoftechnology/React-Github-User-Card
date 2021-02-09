import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import GitHubCard from './components/GitHubCard';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      gitData: {something: 'filler'}
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/paulstgermain')
    .then(res => {
      this.setState({gitData: res.data})
    })
  }

  render(){
  return (
    <div className="App">
      <GitHubCard gitData={this.state.gitData} />
    </div>
  );
  }
}

export default App;
