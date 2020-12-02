import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .profileCard{
    border: black 3px solid;
    border-radius: 10px;
    margin: 2%;
    padding: 1%;
    width: 25rem;

    img{
      width: 100%;
    }
    .githubImg{
      width: 2rem;
    }
  }

`

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const StyledCards = styled.div`
  border: black 3px solid;
  border-radius: 10px;
  margin: 2%;
  padding: 1%;
  width: 10rem;
  img{
    width: 100%;
  }
  .githubImg{
    width: 2rem;
  }
`

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/cmirza')
      .then(response => {
        console.log(response);
        this.setState({ user: response.data });
      })
      .catch(error => console.error(error))

    axios
      .get('https://api.github.com/users/cmirza/followers')
      .then(response => {
        console.log(response);
        this.setState({ followers: response.data });
      })
      .catch(error => console.error(error))
  };



  render(){
    return (
      
      <div className='App'>
        <div>
          <h1>GitHub Followers</h1>
        </div>
        <StyledProfile>
          <div className='profileCard'>
            <img src={this.state.user.avatar_url} alt={this.state.user.login}/>
            <p>{this.state.user.name}</p>
            <p>{this.state.user.login}</p>
            <a href={this.state.user.html_url}><img className='githubImg' src='https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg' alt='GitHub Profile'/></a>
            <p>Followers: {this.state.user.followers}</p>
            <p>Following: {this.state.user.following}</p>
          </div>

        </StyledProfile>
        
        <StyledList>
          {this.state.followers.map(follower =>
            <StyledCards key={follower.id}>
              <img src={follower.avatar_url} alt={follower.login} />
              <p>{follower.login}</p>
              <a href={follower.html_url}><img className='githubImg' src='https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg' alt='GitHub Profile'/></a>
            </StyledCards> 
          )}
        </StyledList>


      </div>
    );
  }

}

export default App;
