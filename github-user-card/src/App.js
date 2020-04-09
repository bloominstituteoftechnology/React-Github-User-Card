import React from 'react';
import FollowerCard from './components/FollowerCard';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users/jordan-lanier')
      .then(res => res.json())
      .then(userData => {
        console.log('User Data', userData);
        this.setState({ name: userData.name });
        this.setState({ avatar: userData.avatar_url });
        this.setState({ location: userData.location });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <UserCard
          name={this.state.name}
          avatar={this.state.avatar}
          location={this.state.location}
        />
                <FollowerCard />
      </div>
    );
  }
}

export default App;