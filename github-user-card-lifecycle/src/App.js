import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';



class App extends React.Component {
  state = {
    user: {},
    followers: [],
  }
  

  componentDidMount() {
    console.log('mounting')
    axios
      .get('https://api.github.com/users/da-vazquez')
      .then(res => {
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
  return (
    <div className='App'>
      <h1>React Github User Card</h1>
      <Card user={this.state.user}/>
    </div>
  )

}}

export default App;
