import React from 'react';
import './App.css';
import User from "./components/Users";
import Followers from "./components/Followers";

function App () {
    return (
      <div>
        <h1>Github User Card</h1>
        <User/>
        <Followers/>
      </div>
    )
  }

export default App;
