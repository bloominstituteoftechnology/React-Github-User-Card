import React from 'react';
import axios from 'axios'
import Card from './Card'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/Iandecisiv")
      .then(response => {
        this.setState({ userData: response.data });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log('error', error)

      })

    axios
      .get("https://api.github.com/users/Iandecisiv/followers")
      .then(response => {
        console.log('followers', response);
        this.setState({ followers: response.data })
      })
      .catch(error => {
        console.log('error', error)

      })
  }

  render() {

    return (
      <div>
        <Card data={this.state.userData} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
