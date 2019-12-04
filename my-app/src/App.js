import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User'
import Following from './Components/Following';

function App() {
  return (
    <div className="App">
        <User />
        <Following/>
    </div>
  );
}

export default App;
