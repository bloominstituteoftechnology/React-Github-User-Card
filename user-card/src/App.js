import './App.css';
import React from 'react';
import Card from './Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>Github Card</h1>
      <Card />
      </div>
    );
  }
}

export default App;
