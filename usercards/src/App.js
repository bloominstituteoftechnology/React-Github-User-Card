import React from 'react';
import './App.css';
import Header from './compnents/Header';

class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className='App-header'>
        <Header />
      </div>
    );
  }
};

export default App;
