import React from 'react';
import FollowerCard from './components/FollowerCard';
import InputForm from './components/InuputForm';
import UserCard from './components/UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: [],
      avatar: [],
      location: [],
      bio: [],
      public_repos: []
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users/HamidAzizy')
      .then(res => res.json())
      .then(userData => {
        console.log('User Data', userData);
        this.setState({ name: userData.name });
        this.setState({ avatar: userData.avatar_url });
        this.setState({ location: userData.location });
        this.setState({ bio: userData.bio });
        this.setState({ public_repos: userData.public_repos });
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
          bio={this.state.bio}
          public_repos={this.state.public_repos}
        />
        <InputForm name={this.state.name} />
        <FollowerCard />
      </div>
    );
  }
}

export default App;
