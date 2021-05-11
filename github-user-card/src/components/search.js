import React from 'react';
// import { SearchContainer } from './styles';
// import { Input } from '@material-ui/core';
// import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.username);
    this.setState({
      ...this.state,
      username: ""
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <SearchIcon /> */}
        <input 
          placeholder="Search…" 
          onChange={this.handleChange} 
          value={this.state.username} 
          type="text" />
      </form>
    )
  }
};

export default Search;