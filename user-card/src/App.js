import ReactDOM from "react-dom";
import React, {useState, useEffect } from 'react';
import axios from 'axios'

import logo from './logo.svg';
import './App.css';

function App() {

  const [profile, setProfile] = useState()
  const [followers, setFollowers] =useState()
  
  useEffect(() => {
    axios
      .get(
        'https://api.github.com/users/artofmayhem/followers'
      )
      .then((res) => {
        setFollowers(res.data);
        // console.log(
        //   "Incoming Github Followers data... received.",
        //   res.data
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    axios
      .get(
        'https://api.github.com/users/artofmayhem'
      )
      .then((res) => {
        setProfile(res.data);
        // console.log(
        //   "Incoming Github data... received.",
        //   res.data
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

console.log(followers, "followers")
console.log(profile, 'profile')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
