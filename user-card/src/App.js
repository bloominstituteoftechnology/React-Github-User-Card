import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React from 'react';

class App extends React.Component {
 state = {
  user: []
 }


  componentDidMount(){
    axios.get(`https://api.github.com/users/bipin-shrestha`)
         .then(res => {
          console.log(`check here`,res) 
          this.setState({ user: res.data.data})       
         })
         .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.data !== this.state.data){
      axios.get(`https://api.github.com/users/bipin-shrestha/followers`)
      .then(res => {
        console.log(`check here`, res)
        this.setState({ user: res.data.data})
      })
      .catch(err => console.error(err));
    }
  }

  // handleClick = e => {
  //   this.setState({})
  // }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
