import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './UserCard';
import InputForm from './InputForm';

class App extends React.Component {
  state = {
    userData: [],
    userFollowers: [],
    inputValue: '',
  }

  componentDidMount() {
    // timeout set just to demonstrate the loading message
    setTimeout(() => {
      axios
      .get('https://api.github.com/users/apcatanzariti')
      .then((res) => {
        this.setState({
          userData: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
    }, 1000);

    axios
    .get('https://api.github.com/users/apcatanzariti/followers')
    .then((res) => {
      this.setState({
        userFollowers: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  };

  inputChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.inputValue}`)
    .then((res) => {
      this.setState({
        userData: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  };

  render() {
    // creates loading message while the API fetches data. set timeout used above for dramatic effect
    if (this.state.userData.length === 0) {
      return <StyledAppContainer>
        <center>
        <h3>Loading Information...</h3>
        </center>
        </StyledAppContainer>
    };

  return (
    <StyledAppContainer>
      <center>
        <InputForm inputChange={this.inputChange} submit={this.onSubmit} />
        <UserCard userData={this.state.userData} userFollowers={this.state.userFollowers} />
      </center>
    </StyledAppContainer>
  )};
}

export default App;

const StyledAppContainer = styled.div`
  // border: solid 1px blue;
  font-family: sans-serif;
  margin: 0 auto;
`;
