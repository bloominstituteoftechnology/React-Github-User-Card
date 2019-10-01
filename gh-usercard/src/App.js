import React from 'react';
import './App.css';
import Axios from 'axios';


class App extends React.Component{
  state={
    follower:[],

  }
  componentDidMount(){
    Axios
    .get('https://api.github.com/users/a-soren/followers')
    .then(res=>{
      console.log('axios call response', res);
    })
    .catch(err=>{
      console.log('Error: ', err);
    })
  }
}

export default App;
