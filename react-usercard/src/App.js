import React from 'react';
import './App.css';
import UserCard from "./components/UserCard";


class App extends React.Component {
  constructor(){
    console.log('Constuctor Invoked!');
  super();
  this.state = {
    userData: {},
    followerData: []
    }
  };

  componentDidMount() {
    fetch("https://api.github.com/users/kkdev211")
      .then(res => res.json())
      .then(user => {
        console.log("kk: App.js: CDM: fetch: then2: user: ", user);
        this.setState({userData: user});
        fetch("https://api.github.com/users/kkdev211/followers")
          .then(res => res.json())
          .then(followers => {
            console.log("kk: App.js: CDM: fetch: then2: followerData: ", followers);
            this.setState({followerData: followers}); 
          } )
      })
      .catch(err => console.error(err));
  }

render() {
  return (
    <div className="App">
      <div className="header">
        <h1> GitHub User Card</h1>
        <UserCard 
          user={this.state.userData}
        />
        <h1> Followers</h1>
        {this.state.followerData.map(follower => {
          return <UserCard user={follower} />;
        })}
        
      </div>
      
    </div>
  );
}
}


export default App;
