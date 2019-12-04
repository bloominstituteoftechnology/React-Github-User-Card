import React from "react";
import styled from "styled-components";

import { SearchForm } from "../styling/AppStyle";

class GitSearch extends React.Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <SearchForm
        onSubmit={e => {
          e.preventDefault();
          this.props.updateUserSearch(this.state.search);
        }}
      >
        <input
          type="text"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <button type="submit">Search Users</button>
      </SearchForm>
    );
  }
}

export default GitSearch;
