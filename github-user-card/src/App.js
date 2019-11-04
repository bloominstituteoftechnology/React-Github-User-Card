import React from 'react';
 import 'semantic-ui-css/semantic.min.css';
import UserCard from './components/UserCard.js';
import CardList from './components/CardList.js';
import "./components.css"




class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followersData: []
    };
  }

componentDidMount() {
  fetch("https://api.github.com/users/grizzlybrodams")
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({ userData: res }))
    .catch(err => console.log(err));

  fetch("https://api.github.com/users/grizzlybrodams/followers")
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({ followersData: res }))
    .catch(err => console.log(err));
}
  


render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Card</h1>
        <UserCard userData={this.state.userData} />
        <CardList followersData={this.state.followersData} />
      </header>
    </div>
  );
}
}

export default App;
