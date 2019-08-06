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
      <span>My Github</span>
      <div className="flex">
      <div className="git-card"><h2>{this.state.user.login}</h2><img className="git-img" src={this.state.user.avatar_url}/></div>
    {this.state.github.map(follower => {
          return <div className="git-card"><h2>{follower.login}</h2><img className="git-img" src={follower.avatar_url}/></div>
        })}
        {console.log(this.state)}
    </div>
    </div>
  );
}
}
export default App;
