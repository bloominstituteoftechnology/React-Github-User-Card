import React from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/mchrupcala')
     .then(res => 
      // console.log(JSON.stringify(res.data))
      this.setState({users: JSON.stringify(res.data)})
      )
    .catch(err => console.log(err)); 
  }

  componentDidUpdate() {
    axios
    .get('https://api.github.com/users/mchrupcala/followers')
     .then(res => 
      console.log(res.data)
      // this.setState({followers: res.data})
      )
    .catch(err => console.log(err))
  }

render() {
  return (
    <div className="App">
      <UserList users={this.state.users}/>
    </div>
  );

  }
}

export default App;
