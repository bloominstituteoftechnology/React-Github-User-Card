import React from 'react';
import axios from 'axios';
import User from './components/user';
import Followers from './components/followers';
import Search from './components/search';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

/////// styles /////////

const StyledContainer = styled(Container) ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: "url('https://cdn.pixabay.com/photo/2020/06/12/09/30/code-5289831_1280.jpg') no-repeat center center fixed", 
  '-webkit-background-size': 'cover',
  '-moz-background-size': 'cover',
  '-o-background-size': 'cover',
  backgroundSize: 'cover',
  padding: 0,
});

const FollowersContainer = styled(Container) ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Heading = styled(Typography) ({
  backgroundColor: 'white',
  width: '100%',
  padding: '2%',
  fontSize: '30px',
  display: 'flex',
  justifyContent: 'center',
});

/////// component ///////

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
      <StyledContainer>
        <CssBaseline />

        <Heading>Github User Cards</Heading>
        
        <Search />

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
