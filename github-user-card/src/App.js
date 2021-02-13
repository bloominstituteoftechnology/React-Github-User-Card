import React from 'react';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';
import Search from './components/search';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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
      <Container>
        <CssBaseline />
        
        <Search />

        <h2>Github User</h2>
        {this.state.userData && this.state.userData.map((user, index) => {
          return <User key={index} user={user}/>
        })}

        <h2>Followers</h2>
        {this.state.followers && this.state.followers.map((follower, index) => {
          return <Followers key={index} follower={follower} />
        })}

      </Container>
    );
  }
}

export default App;
