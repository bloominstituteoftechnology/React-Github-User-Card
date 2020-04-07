import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

//styles
const FollowerCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  border: 1px dotted red;
`;

const FollowerCard = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2% 1% 2% 1%;

  border: 1px dotted red;
`;

const UserCard = styled.div`
  width: 200;
`;

class App extends React.Component {
  constructor() {
    super();
    //set initial state
    this.state = {
      GhUserName: '',
      GhUserData: {},
      GhFollowersData: [],
    };
  }

  // axios get request
  componentDidMount() {
    // console.log('componentDidMount is called');
    axios.get('https://api.github.com/users/DenisChuvilin/followers').then((response) => {
      // console.log(response);
      this.setState({
        GhFollowersData: response.data,
      });
      // console.log(this.state.GhFollowersData);
    });
    axios.get('https://api.github.com/users/DenisChuvilin').then((response) => {
      this.setState({
        GhUserData: response.data,
      });
      // console.log(this.state.GhUserData)
    });
  }
  
  // inputs for search
  handleChange = event => {
    this.setState({ GhUserName: event.target.value });
    console.log(this.state.GhUserName);
  }
  
  handleSubmit() {}
  render() {
    // console.log('render is called');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* search user */}
          <input type="text" value={this.state.GhUserName} onChange={this.handleChange} />
          <button>Search User</button>

          <UserCard>
            <img src={this.state.GhUserData.avatar_url} style={{ width: 50 }} alt="follower" />
            <p>{this.state.GhUserData.login}</p>
          </UserCard>
          {/* followers go here */}
          <FollowerCardContainer>
            {this.state.GhFollowersData.map((follower) => {
              return (
                <>
                  <FollowerCard>
                    <img src={follower.avatar_url} style={{ width: 100 }} alt="follower" />
                    <p>{follower.login}</p>
                  </FollowerCard>
                </>
              );
            })}
          </FollowerCardContainer>
        </header>
      </div>
    );
  }
}
export default App;
