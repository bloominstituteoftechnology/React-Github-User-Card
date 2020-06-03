import React, { Component } from 'react';

export class Search extends Component {
  //set component level state (only for this component)
  //initial state of search bar
  state = {
    text: ''
  };

onSubmit = (e) => {
  e.preventDefault();
  this.props.searchUsers(this.state.text); //sends props to search function in App.js
  this.setState({ text:'' }); //sets search back to blank
};

///even handles text box change, relevent only to this component
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input 
            type='text' 
            name='text' 
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange} //handles changes in Search bar allows typing
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button className='btn btn-light btn-block' onClick={this.props.clearUsers}> 
            Clear 
          </button>
        )}
        
      </div>
    );
  }
}

export default Search;
