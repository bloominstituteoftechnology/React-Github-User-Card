import React from 'react';
import Usercard from './Components/Usercard';
import SearchBox from './Components/SearchBox'

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      githubUser: [],
      githubFollowers: [],
      searchField: 'riddlej9879'
    };
  }

  componentDidMount() {
    // Use the tilde (``) when adding the {variable} for the search option
    fetch(`https://api.github.com/users/${this.state.searchField}`)
      .then(response => response.json())
      .then(data => this.setState({ githubUser: data }))
      .catch(error => {
        console.log('Error: ', error);
      })
    fetch(`https://api.github.com/users/${this.state.searchField}/followers`)
      .then(response => response.json())
      .then(data => this.setState({ githubFollowers: data }))
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  handlechange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component did update')

    if (prevState.githubUser !== prevProps.githubUser) {
      // console.log('State updated')
    }
  }

  render() {
    // const { githubUser, searchField } = this.state;
    // const filtereduser = githubUser.filter(user => 
    //   user.login.toLowerCase(searchField.toLocaleLowerCase()));
    return (
      <div className='App'>
        <h1>Github User Card</h1>
        <SearchBox
          placeholder='Search Users'
          handlechange={this.handlechange}
        />
        <Usercard
          githubUser={this.state.githubUser}
          githubFollowers={this.state.githubFollowers}
          handlechange={this.handlechange}
        />
      </div>
    )
  }
}

export default App;
