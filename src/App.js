import React from 'react';
import Cards from "./components/Cards";
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/ajg7")
      .then(response => {
        const userData = response.data
        this.setState({
          users: userData
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Cards</h1>
        <Cards users={this.state.users}/>
      </div>
    );
  }
}

export default App;
