import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      user: {},
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/bangstry')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;
