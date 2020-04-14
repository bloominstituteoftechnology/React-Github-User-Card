import React from 'react';
import Usercard from './Components/Usercard';

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

  submitSearch = event => {
    event.preventDefault();
    
    this.setState({ [event.target.name]: event.target.value })
  };

  handleChanges = event => {
    // this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value)
  };

  render() {
    return (
      <div className='App'>
        <h1 className='app-header' >Github User Card</h1>
        <div className='search-box'>
          <form onSubmit={this.submitSearch}>
            <input
              className='search'
              type='text'
              name='searchField'
              placeholder='Does not work yet'
              onChange={this.handleChanges}
            />
            <button>Search</button>
          </form>
        </div>
        <Usercard
          githubUser={this.state.githubUser}
          githubFollowers={this.state.githubFollowers}
        />
      </div>
    )
  }
}

export default App;
