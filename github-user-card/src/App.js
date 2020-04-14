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

  componentDidUpdate(prevProps, prevState) {
    // console.log('Component did update')

    if (prevState.githubUser !== prevProps.githubUser) {
      console.log('State updated')
    }
  }

  handlechange = event => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    // const filtereduser = githubUser.filter(user => 
    //   user.login.toLowerCase(searchField.toLocaleLowerCase()));
    return (
      <div className='App'>
        <h1 className='app-header' >Github User Card</h1>
        <div className='search-box'>
            <form onSubmit={this.handlechange}>
                <input
                    className='search'
                    type='text'
                    name='searchField'
                    placeholder='Does not work yet'
                />
                <button>Search</button>
            </form>
        </div>
        {/* <SearchBox
          placeholder='Search Users'
          handlechange={this.handlechange}
          searchField={this.searchField}
        /> */}
        <Usercard
          githubUser={this.state.githubUser}
          githubFollowers={this.state.githubFollowers}
        />
      </div>
    )
  }
}

export default App;
