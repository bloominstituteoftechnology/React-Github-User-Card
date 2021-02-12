import React from 'react';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';
import Search from './components/search';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      userData: [],
      followers: []
    }
  }

  componentDidMount = () => {
    axios.get(`https://api.github.com/users/kwnie`)
      .then(res => {
        this.setState({
          ...this.state,
          userData: [res.data]
        })
      })
      .catch(err => console.log('err',err))

    axios.get('https://api.github.com/users/kwnie/followers')
      .then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
      .catch(err => console.log(err))
    
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.userData !== this.state.userData){
      console.log('userdata has changed')
    }
  }
  
  render(){
    return (
      <div>

        <h1>Github User</h1>

        <Search />

        {this.state.userData && this.state.userData.map((user, index) => {
          return <User key={index} user={user}/>
        })}

        {this.state.followers && this.state.followers.map((follower, index) => {
          return <Followers key={index} follower={follower} />
        })}

      </div>
    );
  }
}

export default App;
