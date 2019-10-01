import React from 'react';
import './App.css';
import axios from "axios"
import UserCard from "./components/user-card.js"


class App extends React.Component {
  state = {
    users:[]
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/kmallen91`)
    .then (res => {
      console.log(res)
      this.setState ({
        users:res.data
      })
    })
    .catch(err => console.log('ERROR'))
  };

render() {
return (
    <div className="App">
      <h2> Placeholder </h2>
      <UserCard 
      data={this.state.users}
      />

    </div>
  );
}
}

export default App;
