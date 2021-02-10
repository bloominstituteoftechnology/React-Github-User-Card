import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/alex-wallander')
    .then((res) => {
      axios.get('https://api.github.com/users/alex-wallander/followers')
      .then((res2) => {
        this.setState({
          followers: res2.data
        });
        console.log(res2.data)
      })
      console.log(res.data)
      this.setState({
        user: res.data
      }); 
    })
    .catch(err => {
      console.log(err);
    });
  }
  

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      console.log('user state has been updated')
    }

    if (this.state.followers !== prevState.followers) {
      console.log('follower state has been updated')
    }
  }

  handleChanges = (e) => {
    this.setState({
      user: e.target.value,
    });
  }




  render() {
    return (
      <StyledContain>
      <StyledCard>
        <img src= {this.state.user.avatar_url} key= {this.state.user.avatar_url} alt={this.state.user.name}/>
        <div>
          <h2>{this.state.user.name}</h2>
          <h3>{this.state.user.login}</h3>
          <p>Location: {this.state.user.location}</p>
          <p>Url:  
             <a href={this.state.user.url}> {this.state.user.url}</a></p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
        </div>
      </StyledCard>
      <div>
        {this.state.followers.map((follower) => {
        return (
          <StyledContain>
          <StyledCard>
          <img src= {follower.avatar_url} key= {follower.avatar_url} alt={follower.name} />
          <div>
            <h2>{follower.name}</h2>
            <h3>{follower.login}</h3>
            <p>Location: {follower.location}</p>
            <p>Url: 
              <a href={follower.url}>{follower.url}</a>
            </p>
            <p>Followers: {follower.followers}</p>
            <p>Following: {follower.following}</p>
            </div>
            </StyledCard>
            </StyledContain>
        )
    })}
      </div>
      </StyledContain>
      );
    }

  }

export default App;

const StyledContain = styled.div`
  max-width:800px;
`;


const StyledCard = styled.div`
    width: auto;
    padding: 20px;
    display: flex;
    border-radius: 5px;
    box-shadow: 0 1px 6px -2px #000;
    background-color: #FFF;
    margin-bottom: 30px;
`;