import React from 'react';
// import axios from 'axios';
// import UserCard from './components/UserCard';

import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      MyData: null
    }
  }

componentDidMount() {
  this.FetchMyData();
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


render() {
  return (
    <div className='App'>
      {console.log(this.state.MyData)}




    </div>
  )
}

}




export default App;
