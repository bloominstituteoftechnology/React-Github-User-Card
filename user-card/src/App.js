import axios from 'axios';
import './App.css';
import React from 'react';
import UserInfo from './components/UserInfo';
import GitStats from './components/GitStats';
import GitSocial from './components/GitSocial';


class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      user: []
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/Rex-1031')
      .then(res =>
        
        {console.log(res);
          this.setState({
            ...this.state,
            user: res.data,
            userImage: res.data.avatar_url,
            login: res.data.login,
            email: res.data.email,
            company: res.data.email,
            location: res.data.location,
            hireable: res.data.hireable,
            bio: res.data.bio,
            repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following,
            stars: res.data.stars,
            twitter: res.data.twitter_username,
            site: res.data.blog

            
          }) 
      })
      .catch(err =>{console.log(err)})
  }




  render() { 
    return ( 
      <div className='App'>
        <h1>Github User</h1>

        <div className="userCard">
          <div className="CardHeader">
            <img src={this.state.userImage} alt="User Avatar" />
            <h3>{this.state.user.name}</h3>
          </div>

          <div className='userInfo'>
          <UserInfo 
            login ={this.state.login}
            email ={this.state.email}
            company ={this.state.user.company}
            location ={this.state.location}
            hireable = {this.state.hireable}
            bio = {this.state.bio}
          />
          </div>

          <div className="gitStats">
            <GitStats 
              repos= {this.state.repos}
            />
          </div>

          <div className="gitSocial" >
            <GitSocial 
              followers ={this.state.followers}
              following ={this.state.following}
              stars={this.state.stars}
              twitter ={this.state.twitter}
              site ={this.state.blog}
            />
          </div>
        </div>
      </div> );
  }
}
 
export default App;

