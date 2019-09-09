import React from 'react';
// import axios from 'axios';
// import UserCard from './components/UserCard';

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      MyData: null,
      MyFollowers: null
    }
  }

componentDidMount() {
  this.FetchMyData();
  this.FetchMyFollowers();
}


FetchMyData = () => {
  fetch('https://api.github.com/users/eric-wise')
  .then(res => {
    return res.json()
  })
  .then(data => {
    return this.setState({MyData: data})    
  })
  .catch(err => console.log(err))
}

FetchMyFollowers = () => {
  fetch('https://api.github.com/users/eric-wise/followers')
  .then(res => {
    return res.json()
  })
  .then(data => {
    return this.setState({MyFollowers: data})    
  })
  .catch(err => console.log(err))
}






render() {
  return (
    <div className='App'>
      {console.log(this.state.MyData)}
      {console.log(this.state.MyFollowers)}





    </div>
  )
}

}




export default App;
