import React from 'react';
import Loading from './Loading';
import User from './User';
import Follower from './Follower';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
      followers: []
    }
  }
  componentDidMount() {
    fetch('https://api.github.com/users/hlee2542')
      .then(res => res.json())
        .then(data => this.setState({loading: false, user: data}));
  }
  updateFollowers(followers) {
    this.setState({followers: followers});
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : <User user={this.state.user} updateFollowers={this.updateFollowers.bind(this)}/>}
        {this.state.followers.length ? this.state.followers.map(follower => <Follower follower={follower}/>) : null}
      </div>
    );
  }
}

export default App;
