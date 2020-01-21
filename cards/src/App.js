import React, { Component } from "react";


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
   
    const getFriends = () => {
      fetch('https://api.github.com/users/')
        .then(response => response.json())
        .then(friends => this.setState({friends: friends}))
        .catch(err => console.log('Error'));
  };

    this.setState({});
  }

  render() {
    return (
      <div className="App">
        <h1> Welcome to Friends! </h1>
      </div>
    );
  }
}
 
export default App;