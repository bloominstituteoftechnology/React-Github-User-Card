//imports
import React from 'react';
import UserCard from './components/UserCard'
//style
import './App.css';
import styled from 'styled-components'

const ContainerStyle = styled.div`
background-color: gray;
`

//app
class App extends React.Component {

  constructor(){
    super()
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/tommyconner96')
    .then(res => res.json())
    .then(
      user => {
        console.log(user)
        this.setState({user: user})
      }
    )
    .catch(err => console.log('there was an error getting the user data', err))

  }
  render() {
    return (
      <ContainerStyle>
        <UserCard user={this.state.user} />
      </ContainerStyle>
    )
  }
}

export default App;
