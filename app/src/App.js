import React, { Component }from 'react';
import Navbar from './components/Navbar'
import Users from './components/Users'
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loaging: true});

    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data, followersUrl: res.data.followers_url, loaging: false});
   
    console.log(res.data)
  }
 render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
        <Users loading={this.state.loading} users={this.state.users} followers={this.state.followers}/>
      </div>
      </div>
    );
  }
}

export default App;
