import React from 'react';
import UserCard from './Components/UserCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  fetchUsers = () => {
    fetch('https://api.github.com/users/tommykindle')
      .then(res => {
        return res.json();
      })
      .then(userInfo => this.setState({ user: userInfo }))

      .catch(err => {
        console.log('Server Not Responding', err);
      })
  }


  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div>
        <UserCard />
      </div>
    );
  }
}





export default App;
