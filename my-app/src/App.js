import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("first render - DidMount")

    // user fetch
    fetch('https://api.github.com/users/misskellymore')
      .then(res => res.json())
      .then(data => this.setState({user: data}));

      // followers fetch
      fetch('https://api.github.com/users/misskellymore/followers')
      .then(res => res.json())
      .then(data => this.setState({followers: data}));

  }

  componentDidUpdate() {
    console.log("runs on every rerencer -DidUpdate", this.state);
  }


  render() {
    return(
      <div className="App">
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }

  
}

function UserCard(props) {

  return(
    <div>
        <h2> {props.user.login} </h2>
        <p> {props.user.bio || "no bio"} </p>
        <p>{props.user.location || "15 Yemen Rd, Yemen"} </p>
        <p>{props.user.url} </p>

          <div>
            {props.followers.map(follower => (
            <div key={follower.id}>
            {follower.login}</div>
            ))}
          </div>
    </div>
  );    
}



export default App;
