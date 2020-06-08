import React from 'react';
import axios from 'axios';
import Usercard from './Components/Usercard';

import './App.css';

class App extends React.Component {
  state = {
    githubUser: [],
    githubFollowers: [],
    contribution: '',
    searchField: ''
  };

  componentDidMount() {

    // FETCH STEUP
    fetch('https://api.github.com/users/riddlej9879')
      .then(response => response.json())
      .then(res => this.setState({ githubUser: res }))
      .then(res => this.setState({contribution: 'https://ghchart.rshah.org/riddlej9879'}))
      .catch(error => {
        console.log('Error: ', error);
      })
    fetch('https://api.github.com/users/riddlej9879/followers')
      .then(response => response.json())
      .then(res => this.setState({ githubFollowers: res }))
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.githubUser !== prevProps.githubUser) {
      // console.log('State Updated')
    }
  }

  submitSearch = e => {
    e.preventDefault()
    console.log('Submit Search', this.state.searchField)

    fetch(`https://api.github.com/users/${this.state.searchField}`)
      .then(res => res.json())
      .then(data => this.setState({ ...this.setState, githubUser: data }))
      .then(res => this.setState({contribution: `https://ghchart.rshah.org/${this.state.searchField}`}))
      .catch(error => {
        console.log('Error: ', error);
      })
    fetch(`https://api.github.com/users/${this.state.searchField}/followers`)
      .then(res => res.json())
      .then(data => this.setState({ ...this.setState, githubFollowers: data }))
      .catch(error => {
        console.log('Error: ', error);
      })
  };

  handleChange = e => {
    this.setState({ ...this.setState, searchField: e.target.value });
    // console.log('handleChange', e.target.name, e.target.value)
  };

  render() {
    return (
      <div className='App'>
        <h1 className='app-header' >Github User Card</h1>
        <div className='search-box'>
          <form>
            <label name='searchField'>
              Username:
            </label>
            <input type="text" name='searchField' onChange={this.handleChange} />
            <button onClick={this.submitSearch}>Search</button>
          </form>
        </div>
        <Usercard
          githubUser={this.state.githubUser}
          githubFollowers={this.state.githubFollowers}
          contribution={this.state.contribution}
        />
      </div>
    )
  }
}

export default App;
