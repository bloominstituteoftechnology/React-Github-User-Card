import './App.css';
import React from "react";
import axios from "axios";
import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {},
      followers: []
    }
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/allraec')
      .then(res => {
        this.setState({...this.state, user: res.data})
      })
      .catch(err => {
        console.log(err)
      })

    axios.get('https://api.github.com/users/allraec/followers')
      .then(res => {
        this.setState({...this.state, followers: res.data})
      })
      .catch(err => {
        console.log(err)
      })

  }

  render(){
    return(
      <div className='App'>
        <User user={this.state.user} />
        {
          this.state.followers.map(follower => {
            return <Followers follower={follower} />
          })
        }
      </div>
    )
  }
}

export default App;