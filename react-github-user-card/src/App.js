import React from 'react';
import axios from 'axios';
import GitHubUserCard from './component/gitHubUserCard';
import './App.css';

class App extends React.Component {
  state = {
    gHUsers: []
  }
  componentDidMount() {
    let users = [];
    //get my info from api
    axios.get('https://api.github.com/users/mirwes ')
      .then(res => {
        const gHUser = {
          name: res.data.name,
          image: res.data.avatar_url,
          username: res.data.login,
          location: res.data.location,
          profilePage: res.data.html_url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio,
          id: res.data.id
        }
        users = [...users, gHUser];
        this.setState({gHUsers: [gHUser]});
        return res.data.followers_url;
      }).then(res => {
        //get the login for my followers
        axios.get(res).then(res => {
          return res.data.map(follower => follower.login); //returns an array of my followers' logins
        }).then(res => {
          res.forEach(login => {
            //get the info for all my followers from the api
            axios.get(`https://api.github.com/users/${login}`)
            .then(res => {
              const gHUser = {
                name: res.data.name,
                image: res.data.avatar_url,
                username: res.data.login,
                location: res.data.location,
                profilePage: res.data.html_url,
                followers: res.data.followers,
                following: res.data.following,
                bio: res.data.bio,
                id: res.data.id
              }
              users = [...users, gHUser];
              this.setState({gHUsers: users});
            }).catch(err => {
              console.log("followers' user info request error: ", err);
            });
          })
        }).catch(err => {
          console.log('followers_url axios request error: ', err);
        });
      }).catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="header">
         
        </div>
        {this.state.gHUsers.map(user => {
          return <GitHubUserCard key={user.id} data={user} />;
        })}
      </div>
    );
  }
}

export default App;