import './App.css';
import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import Card2 from './components/Card2'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/allraec')
    .then(res => {
      this.setState({
        ...this.state,
        user: res.data
      })
    })
    .catch(err => console.log(err));

    axios.get('https://api.github.com/users/allison/followers')
    .then(res => {
      this.setState({
        ...this.state,
        followers: res.data
      })
    })
    .catch(err => console.log(err));

  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== {}) {
      console.log(this.state.user)
    }
    if(prevState.followers.length !== this.state.followers.length) {
      console.log(this.state.followers)
    }
  }

/*   componentDidUpdate(prevProps, prevState) {
    if(prevState.user.length !== this.state.user.length) {
      console.log(this.state.user)
    }
  } */
  render() {
    return(
      <div className='App'>
        <h1>Github User Card</h1>
        <Card user={this.state.user}/>
        <h2>Followers:</h2>
        {
          this.state.followers.map((user) => {
            return <Card2 user={user}/>
          })
        }
      </div>
    );
  }
}

export default App;
