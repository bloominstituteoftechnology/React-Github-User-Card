import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/umbur")
    .then(response => {
      this.setState({ userData: response.data});
      console.log(this.state.userData);
    })

    axios
    .get("https://api.github.com/users/umbur/followers")
    .then(response => {
      console.log("followers get response: ", response);
      this.setState({followers: response.data})
    })

  }

  render() {

    return (
      <div>
        <Card data={this.state.userData} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App;