import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard'

class App extends React.Component {

  constructor() {
    super();
    //setting state for userData and followers
    this.state = {
      userData: {},
      followers: [],
    };
  }

  componentDidMount(){
    console.log('Mount is running')
    //axios call to the api to get my userdata
    axios
    .get(`https://api.github.com/users/bcanty92`)
    .then(res => {
      console.log(res)
      this.setState({userData: res.data})
    })
    .catch(err => console.log('something went wrong', err))
    //axios call to get my followers data
    axios
    .get(`https://api.github.com/users/bcanty92/followers`)
    .then(res => {
      console.log(res)
      this.setState({followers: res.data})
    })
    .catch(err => console.log('something went wrong', err))
  }

  

  render(){ 
  return (
    <div className="App">
      <header className="App-header">
        <UserCard userData={this.state.userData}/>
        <FollowerCard followers={this.state.followers} />
      </header>
    </div>
  );
  }
}

export default App;
