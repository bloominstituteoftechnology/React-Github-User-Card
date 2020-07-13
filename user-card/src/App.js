import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username : '',
      followers : ''
    }
  }
  componentDidMount(){

    axios
    .get('https://api.github.com/users/JonathanC7')
    .then(res => {
      this.setState({
        username : res.data.login,
        followers : res.data.followers
      })
      console.log(res.data.followers)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render(){
    return (
      <div className="App">
        <Card data={this.state}/>
      </div>
    );
  }
}

export default App;
