import React from 'react';

class Search extends React.Component { 
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting form", this.state.searchTerm);
    this.props.searchUser(this.state.searchTerm);
    this.setState({
      ...this.state,
      searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.searchTerm} type="text" />
          <button>Search here</button>
        </form>
      </div>
    )
  }
}

export default Search;