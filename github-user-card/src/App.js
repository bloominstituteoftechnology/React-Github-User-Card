import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state ={
    user:[],
    github:[],
    userName:''
    }
  }
  // componentDidMount() {

  //   this.getUser();
  // }
  
  // getUser = () => {
  //   fetch(`https://api.github.com/users/${this.state.userName}`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(github => this.setState({ user: github }))
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  getFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.userName}/followers`)
      .then(response => {
        return response.json();
      })
      .then(git => this.setState({ github: git }))
      .catch(err => {
        console.log(err);
      });
  };
  
  handleChange = e => {
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();
    this.getFollowers();
    // this.getUser();
    this.setState({userName:''})
  };

  render(){
  return (
    <div className="App">
      <span>My Github Followers</span>
      <form onSubmit={this.login}>
          <input
            type="text"
            name="userName"
            placeholder="Enter a username"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      <div className="flex">
      {/* <div className="git-card"><h2>{this.state.user.login}</h2><img className="git-img" src={this.state.user.avatar_url}/></div> */}
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
