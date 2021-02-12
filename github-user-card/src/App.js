import React from 'react';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';
import Search from './components/search';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      userData: []
    }
  }

  componentDidMount = () => {
    console.log('cdm running')
    axios.get(`https://api.github.com/users/kwnie`)
      .then(res => {
        console.log('res', res)
        this.setState({
          ...this.state,
          userData: [res.data]
        })
      })
      .catch(err => console.log('err',err))
    // this.searchUser(this.state.currentUser)
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('cdu running')
    if(prevState.userData !== this.state.userData){
      console.log('userdata has changed')
    }
  }

  // searchUser = username => {
  //   axios.get(`https://api.github.com/users/${username}`)
  //     .then(res => {
  //       this.setState({
  //         ...this.state,
  //         currentUser: username,
  //         userData: res.data
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }
  
  render(){
    return (
      <div>
        <h1>Github User</h1>
        <Search />
        {console.log('can I map this?', this.state.userData)}
        {this.state.userData && this.state.userData.map((user, index) => {
          return <User key={index} currentUser={user}/>
        })}
        <Followers />
      </div>
    );
  }
}

export default App;
