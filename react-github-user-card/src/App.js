import React, { Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'


class App extends Component{
  state = {
    users: [],
    // set the initial state of loading to false
    loading: false
  };

  async componentDidMount(){
    //  prior to api call set loading to true
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    // after the api call populates data set user to equal res data (the information returned from the axios call and loading back to false)
    this.setState({users: res.data, loading: false});
  }





  render() {
    return (
      <div className='App'>
       <Navbar /> 
       <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
       </div>
       
      </div>
    );
  }
}

export default App;
