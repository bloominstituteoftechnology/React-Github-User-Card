import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  // constructor, super, etc, are all still built into this class, just under the hood
  state = {
    avatar_url: '',
    name: '',
    email: '',
    login: '',
    blog: '',
    followers: []
  };

  componentDidMount() {
    axios
    .get('https://api.github.com/users/scurtis6')
    .then(res => {
      console.log(res.data)
      this.setState({
        avatar: res.data.avatar_url,
        name: res.data.name,
        email: res.data.email,
        login: res.data.login,
        blog: res.data.blog
      });
    })
    .catch(err => console.log(err));
  }

  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
  }

export default App;
