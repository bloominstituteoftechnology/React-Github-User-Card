import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      profile: [],
      followers: []
    }
  }
  componentDidMount(){
    axios.get("https://api.github.com/users/joowoonk")
    .then(response => {
      console.log(response.data)
      this.setState({
        profile: response.data
      })
    
    })
    axios.get("https://api.github.com/users/joowoonk/followers")
    .then(response => {
      console.log("follwers",response.data)
      // this.setState({
      //   ...folowers,
      //   profile: response.data
      // })
    
    })
    
  }
  render(){
      return (
    <div className="App">
      
    </div>
  );
  }

}

export default App;
