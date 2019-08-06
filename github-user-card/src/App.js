import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
    user:[],
    github:[],
    }
  }
  componentDidMount() {
    this.getFollowers();
    this.getUser();
  }
  getUser = () => {
    fetch(`https://api.github.com/users/zachtyoung`)
      .then(response => {
        return response.json();
      })
      .then(github => this.setState({ user: github }))
      .catch(err => {
        console.log(err);
      });
  };
  getFollowers = () => {
    fetch(`https://api.github.com/users/zachtyoung/followers`)
      .then(response => {
        return response.json();
      })
      .then(git => this.setState({ github: git }))
      .catch(err => {
        console.log(err);
      });
  };

  render(){
  return (
    <div className="App">
    {this.state.github.map(follower => {
          return <h1>{follower.login}</h1>
        })}
        <h1>{this.state.user.login}</h1>
    </div>
  );
}
}
export default App;
