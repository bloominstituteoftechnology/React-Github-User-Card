import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("First Render (mounting)");
    fetch('https://api.github.com/users/ChristopherHernandezW22')
      .then(res => res.json())
      .then(data => this.setState({ user:data }));
    fetch('https://api.github.com/users/ChristopherHernandezW22/followers')
      .then(res => res.json())
      .then(data => this.setState({ followers:data }));
  }

  componentDidUpdate () {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers} />
    </div>
    );
  }
}

function UserCard(props) {
  return (
    <div>
      <h2>{props.user.login}</h2>
      <p>{props.user.location}</p>
      <p>{props.user.url}</p>
      <div>
          {props.followers.map(follower => ( 
            <div key={follower.id}>{follower.login}</div>
          ))}
      </div>
    </div>
  );
}

export default App;
