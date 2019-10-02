import React from 'react';
import Profile from './components/Profile';
import Followers from './components/Followers';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <Profile />
      <h1>Followers</h1>
      <Followers />
    </div>
  );
}

export default App;
