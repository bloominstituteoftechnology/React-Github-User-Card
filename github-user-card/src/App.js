import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './components/UserCard';
import FriendsList from './components/FriendsList';

const Container = styled.div `
  margin: auto;
  display: flex;
  max-width: 40%;
  justify-content: space-between;
`

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: 'gcolegonzales',
      gitUser: {},
      followers: [] ,
      inputValue: ''
    }
  }

  getUser = () => {
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          gitUser: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data
        })
      })
  }

  componentDidMount() {
    this.getUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.username !== this.state.username) {
      this.getUser();
    } else {
      return
    }
  }

  render() {
    return (
      <Container>
        <UserCard {...this.state.gitUser} />
        <FriendsList followers={this.state.followers} />
      </Container>
    )
  }
}

export default App;
