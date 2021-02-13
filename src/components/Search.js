import React from 'react';
import { Button, Input } from 'reactstrap';

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
    // console.log("submitting form", this.state.searchTerm);
    this.props.searchUser(this.state.searchTerm);
    this.setState({
      ...this.state,
      searchTerm: ""
    })
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <Input onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="search for user" />
          <Button color="info" size="lg" block>Search </Button>
        </form>

      </div>
    )
  }
}

export default Search;