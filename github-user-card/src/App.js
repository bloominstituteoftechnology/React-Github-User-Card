import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: 'kwnie',
      userData: []
    }
  }

  componentDidMount = () => {
    this.searchUser(this.state.currentUser)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.userData !== this.state.userData){
      console.log('userdata has changed')
    }
  }

  searchUser = username => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => {
        this.setState({
          ...this.state,
          currentUser: username,
          userData: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <h1>Github User Cards</h1>
      </div>
    );
  }
}

export default App;
