import React from 'react';
import Cards from "./components/Cards";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>GitHub Cards</h1>
        <Cards />
      </div>
    );
  }
}

export default App;
