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
            name: res.data.name,
            userImage: res.data.avatar_url,
            login: res.data.login,
            email: res.data.email,
            company: res.data.company,
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
    const user= this.state;
    return ( 
      <div className='App'>
        <h1>Github User</h1>

        <div className="userCard">
          <div className="cardHeader">
            <img src={user.userImage} width="150" alt="User Avatar" />
            <h3>{user.name}</h3>
            <p>{user.login}</p>
          </div>

          <div className='userInfo'>
          <UserInfo 
            login ={user.login}
            email ={user.email}
            company ={user.company}
            location ={user.location}
            hireable = {user.hireable}
            bio = {user.bio}
          />
          </div>

          <div className="gitStats">
            <GitStats 
              repos= {user.repos}
            />
          </div>

          <div className="gitSocial" >
            <GitSocial 
              followers ={user.followers}
              following ={user.following}
              stars={user.stars}
              twitter ={user.twitter}
              site ={user.blog}
            />
          </div>
        </div>
      </div> );
  }
}
 
export default App;

