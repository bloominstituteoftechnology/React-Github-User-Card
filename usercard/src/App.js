import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Card from './components/card'
import styled from 'styled-components'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      inputValue: '',
    }
  }

  componentDidMount() {
    axios
    .get(`https://api.github.com/users/dvonpingel`)
    .then(res => {
      this.setState({user: res.data})
    })
    .catch(err => {
      console.log(err);
    });
    axios
    .get('https://api.github.com/users/dvonpingel/followers')
    .then(res => {
      this.setState({followers: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleChanges = evt => {
    this.setState({
      inputValue: evt.target.value,
    })
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios
    .get(`https://api.github.com/users/${this.state.inputValue}`)
    .then(res => {
      this.setState({user: res.data})
    })
    .catch(err => {
      console.log(err);
    });
    axios
    .get(`https://api.github.com/users/${this.state.inputValue}/followers`)
    .then(res => {
      this.setState({followers: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <div>
          <Card user={this.state.user} followers={this.state.followers}/>
        </div>
        <ContainerDiv>
          <StyledForm onSubmit={this.handleSubmit}>
            <H3>Enter Github Username</H3>
            <StyledInput
              type='text'
              value={this.state.inputValue}
              onChange={this.handleChanges}
            ></StyledInput>
            <Button>Search</Button>
          </StyledForm>
        </ContainerDiv>
      </div>
    );
  }
}

const ContainerDiv = styled.div`
  width: 300px;
  height: 100px;
  margin: 10px auto 0 auto;
  box-sizing: border-box;
  box-shadow: -20px 20px #698996;
`;
const StyledForm = styled.form`
  background-color: #97B1A6;
  width: 300px;
  height: 100px;
  margin: 10px auto 0 auto;
  box-shadow: -10px 10px #407076;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: #97B1A6;
  border: none;
  border-bottom: 3px solid white;
  height: 40px;
  text-align: center;
  color: white;
  font-weight: bold;

  &:focus {
    outline: none;
    caret-color: white;
  }
`;
const Button = styled.button`
  border: none;
  box-sizing: border-box;
  padding: 4px 10px 4px 10px;
  height: 40px;
  border: 2px solid white;
  background-color: #407076;
  font-weight: bold;
  color: white;
  font-size: 1rem;
  transition: .2s;

  &:hover {
    background-color: white;
    color: #407076;
    transition: .2s;
    cursor: pointer;
  }
`;
const H3 = styled.h3`
  padding: 0;
  margin: -20px 0 -40px 0;
  color: white;
  font-size: 1.2rem;
`;

export default App;