import React from 'react';
import './App.css';
import axios from "axios";

class App extends React.Component {
  state = {
    myCard: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/chelsabeth")
      .then(res => {
        this.setState({
          myCard: res.data
        });
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to the Github User Card App!</h1>
      </div>
    );
  }
}

export default App;
