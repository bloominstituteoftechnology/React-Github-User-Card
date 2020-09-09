import React from 'react';
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData = {},
      followers = []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/maxwes13")
    .then(response => {
      this.setState({userData: response.data});
      console.log(this.state.userData);
    })
    .catch(err => {
      console.log('error', err)
    })


    axios.get("https://api.github.com/users/maxwes13/followers")
    .then(response => {
      this.setState({followers: response.data});
      console.log(this.state.userData);
    })
    .catch(err => {
      console.log('error', err)
    })
  }

    render () {
      return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
