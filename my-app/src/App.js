import React from 'react';
import './App.scss';

import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {
    // constructor, super, etc, are all still built into this class, just under the hood
    state = {
      user: '',
      followers: []
    };
  
    componentDidMount() {
      axios
      .get('https://api.github.com/users/scurtis6')
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

      axios
      .get('https://api.github.com/users/scurtis6/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
    }
  
    
    render() {
      console.log('App is rendering');
      return (
        <div className="user">
          <div>
            <UserCard 
            avatar={this.state.user.avatar_url}
            name={this.state.user.name}
            email={this.state.user.email}
            login={this.state.user.login}
            html={this.state.user.html_url}
            blog={this.state.user.blog}
            location={this.state.user.location}
             />
          </div>
            <h2>My followers</h2>
              {this.state.followers.map(follower => {
                return (
                  <div className="followers">
                    <img src={follower.avatar_url} />
                    <p>Username: {follower.login}</p>
                    <p>Website: {follower.html_url}</p>
                    <p>Followers: {follower.followers_url}</p>
                    {/* <p>Following: {follower.following_url}</p> */}
                </div>
              )
            })}
      </div>
    );
  }
}

export default App;
