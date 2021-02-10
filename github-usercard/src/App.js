import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component {
  state = {
    user: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/alex-wallander')
    .then((res) => {
      console.log(res)
      this.setState({
        user: res.data
      }); 
    })
    .catch(err => {
      console.log(err);
    });
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
        {this.state.user.followers.map(e => <p key={e.this.state.user.id}>{e.this.state.user.name}</p>)}
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