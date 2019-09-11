import React from 'react';
import Head from './components/Head';
import './App.css';

class App extends React.Component{
  state = {
    data: []
  };

  componentDidMount(){
    fetch('https://api.github.com/users/toosdaiotte')
      .then(res => res.json())
      // .then(res => console.log({ res }))
      .then(res => this.setState({ data: res }))
      .catch(err => console.log('BUG', err))
  }

  render(){
    return(
      <div className="App">
          <Head />
          <img src={this.state.data.avatar_url} alt="Toosdai Otte" />
          <h2>{this.state.data.name}</h2>
          <p>{this.state.data.location}</p>
          <a href={this.state.data.url}>{this.state.data.url}</a>
          <p>Following: {this.state.data.followers}</p>
          <p>Followers: {this.state.data.followers}</p>
      </div>
    )
  }
}

export default App;
