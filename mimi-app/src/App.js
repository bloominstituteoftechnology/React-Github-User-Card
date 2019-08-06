import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
   mimiData: []
  
 }
 axios.get("https://api.github.com/users/meowmimi1")
  .then(response => {
    this.setState({
      mimiData: response.data
    })
  })
  .catch(err =>{
    console.log(err)
  })
}
  render(){
    console.log(this.state.mimiData)
  return (
    <div className="App">
     <UserCard mimiData={this.state.mimiData}/>
    </div>
  );
}
}
export default App;
