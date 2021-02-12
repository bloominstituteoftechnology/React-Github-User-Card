import React from 'react';
import './App.css';
import axios from 'axios';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Qirhi")
      .then(res => { 
        // console.log("res.data: ", res.data) // 200
        this.setState({
          ...this.state,
          user: res.data // object
        })
        // console.log("this user: ", this.user)
      })
      .catch(err => console.log(err))
  }

  // console.log("this.state: ", user)

  render () {
    return (
      <div className="App">
        <p>App</p>
        <User user={this.state.user}/>
      </div>
    );
  }
}

export default App;
