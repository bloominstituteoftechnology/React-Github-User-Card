import React from 'react';
import axios from 'axios';
import UserPage from './components/UserPage';
import './App.css';

class App extends React.Component {

  constructor() { 
    super()
    this.state = {
      followersArray: []
    }
  }
  componentDidMount() {
    const URL = 'https://api.github.com/users/anders529';
    axios
      .get(`${URL}`)
      .then(response => {
      this.setState({followersArray: response.data})
    })
    .catch(error => console.log(error))
  }
  render() {
    return  (
     <>
        <UserPage data={this.state.followersArray}/>
     </> 
    );
  }}
export default App;