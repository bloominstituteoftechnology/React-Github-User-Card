import React from 'react';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';
import Search from './components/search';
import { CssBaseline } from '@material-ui/core';
import { StyledContainer, Heading, FollowersContainer } from './components/styles';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      username: 'kwnie',
      userData: [],
      followers: []
    }
  };

  componentDidMount = () => {
    this.search(this.state.username)
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.userData !== this.state.userData){
      console.log('userdata has changed')
    }
  };

  search = username => {

    axios.get(`https://api.github.com/users/${username}`)
    .then(res => this.setState({
      ...this.state,
      userData: [res.data]
    }))

    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => this.setState({
          ...this.state,
          followers: res.data
        })
      )
      .catch(err => console.log(err))
  };
  
  render(){
    return (
      <StyledContainer>
        <CssBaseline />

        <Heading>Github User Cards</Heading>

        <Search search={this.search} />
        
        {this.state.userData && this.state.userData.map((user, index) => {
          return <User key={index} user={user}/>
        })}

        <Heading>Followers</Heading>

        <FollowersContainer>
          {this.state.followers && this.state.followers.map((follower, index) => {
            return <Followers key={index} follower={follower} />
          })}
        </FollowersContainer>

      </StyledContainer>
    );
  }
}

export default App;
