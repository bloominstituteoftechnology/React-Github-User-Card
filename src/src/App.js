import React, { Component } from 'react';
import axios from 'axios';
//import User from './components/User';
import Users from './components/Users';
import Search from './components/Search';
import './App.css';

class App extends Component {

  state = {
    users: [], //all users are and array of objects
    user: {},  //single user is empty object
    loading: false    
  }
  //start lifecycle method
  //call to api using axios

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get('https://api.github.com/users');

  //   this.setState({ users: res.data, loading: false });
  // }
  //Search Github Users

  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({ users: res.data.items, loading: false });
   
  };

  //get single github User
getUser = async (username) => {
  this.setState({ loading: true });

  const res = await axios.get(`https://api.github.com/users/${username}`);

  this.setState({ user: res.data, loading: false });
}

    render () {
      //const { user, loading } = this.state;
      return (
      <div className="App">
      <h1> Github User built with React</h1>
      {/* <User getUser={this.getUser} user={user} loading={loading} /> */}
     <div className='container'>

     <Search searchUsers={this.searchUsers} />

     {/* //pass in loading and users as props */}
       <Users loading={this.state.loading} users={this.state.users} />
     </div>
      
      </div>
    );
  }
};

export default App;
