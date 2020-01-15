import React from 'react';
import  User from './components/User';
import './App.css';
import {FaGithub} from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header>
     <h1><FaGithub/>Welcome to my world of Github!<FaGithub/></h1>
      </header>

      <User/>
    </div>
  );
}

export default App;
