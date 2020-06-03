import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';

import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false    
  }
  //start lifecycle method
  //call to api using axios

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }
    render () {
      
      return (
      <div className="App">
      <h1> Github User built with React</h1>
      
     <div className='container'>
     <h2> Possibly Search bar here ...?</h2>

     {/* //pass in loading and users as props */}
       <Users loading={this.state.loading} users={this.state.users} />
     </div>
      
      </div>
    );
  }
};

export default App;
