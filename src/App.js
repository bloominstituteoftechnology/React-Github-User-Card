import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    personalData: {}

  };

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/caw442000`)
      .then(res => {
        console.log("this is the response", res)
        this.setState({
          personalData: res.data
        });
        console.log("this is personal data", this.state.personalData)
      })
      .catch(err => console.log("error", err));

  }

  
  render(){
    return (
      <div className="App">
        <h1>Github User Card</h1>
      </div>
    );
  }
}

export default App;
