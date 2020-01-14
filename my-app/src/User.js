import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class User extends React.Component {
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
    }
  
    
    render() {
      console.log('App is rendering');
      return (
        <div className="App">
          <div>
            <UserCard 
            avatar={this.state.user.avatar_url}
            name={this.state.user.name}
            email={this.state.user.email}
            login={this.state.user.login}
            html={this.state.user.html_url}
            blog={this.state.user.blog}
             />
          </div>
        </div>
      );
    }
    }

export default User;