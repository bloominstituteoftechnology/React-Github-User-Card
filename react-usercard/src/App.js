import React from 'react';
import './App.css';
import axios from "axios";
import MyCard from './Components/MyCard';

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
        console.log("My Github data", this.state.myCard)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
        <h1>Welcome to the Github User Card App!</h1>
        <MyCard data={this.state.myCard} />
      </div>
    );
  }
}

export default App;
