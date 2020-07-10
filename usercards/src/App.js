import React from 'react';
import './App.css';
import Header from './compnents/Header';
import User from './compnents/User';

class App extends React.Component {
  constructor() {
    super();

  }
  render() {
    return (
      <div className='App-header'>
        <Header />
        <User />
      </div>
    );
  }
};

export default App;
