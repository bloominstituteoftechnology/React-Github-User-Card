import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/mchrupcala')
     .then(res => 
      // console.log(res.data)
      this.setState({users: res.data})
      )
    .catch(err => console.log(err)); 
  }

  componentDidUpdate() {
    axios
    .get('https://api.github.com/users/mchrupcala/followers')
     .then(res => 
      console.log(res.data)
      // this.setState({followers: res.data})
      )
    .catch(err => console.log(err))
  }

render() {
  return (
    <div className="App">
      Hi!
    </div>
  );

}
}

export default App;
