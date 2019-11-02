import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state= {
      user: {},
      followers: [],
      followers_url: ''
    }
  }

  componentDidMount(){
    fetch('https://api.github.com/users/freddiet803')
    .then(res=> res.json())
    .then(res => {
      console.log("this is response ");
      console.log(res);
      this.setState({
        user: res
      })
    })
  }


  render(){
  return (
    <div className="App">
      Hello from React GitHub User Card App!
    </div>
  );
}
}

export default App;
