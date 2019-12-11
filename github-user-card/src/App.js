import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Axios from "axios";

class App extends React.Component {
  //you don't need a constructor function
  //it is already in the class
  state = {
    dataSet: []
  }
  componentDidMount() {
    Axios.get("https://api.github.com/users/wtrawlings")
    .then(response => {
      console.log(response.data)  ;
      this.setState({ dataSet: response.data })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>GET THIS THING WORKING!!!</h1>
        <h2>from inside the render of class App</h2>
      </div>
    );
  }
  
}

export default App;
