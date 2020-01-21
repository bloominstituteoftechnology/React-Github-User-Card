import React from "react";
import axios from "axios";
import UserCard from "./UserCard";
import FollowersCard from './FollowersCard';
import "../App.css";



class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
     
    };
  }

  componentDidMount() {

    // Retrieving my profile on github to set the user state on the date I want to use
    axios
      .get("https://api.github.com/users/JRodDvlpr")
      .then(res => {
        console.log(res.data);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));

        // Retrieving my followers on github to set the state
    axios
      .get("https://api.github.com/users/JRodDvlpr/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err));
  }


  
render() {
  

    return (
      <div id='background'>
        <div className='githubCards'>

          {
            <UserCard
              login={this.state.user.login}
              id={this.state.user.id}
              img={this.state.user.avatar_url}
              location={this.state.user.location}
              html_url={this.state.user.html_url}
              followers={this.state.user.followers}
              following={this.state.user.following}
              repo={this.state.user.public_repos}
            />
          }
        </div>

        <h2>Followers</h2>
        
        <br></br>
        
        <div className='followers' >
            
          {this.state.followers.map(follower => (
            <FollowersCard 
              login={follower.login}
              id={follower.id}
              img={follower.avatar_url}
              location={follower.location}
              html_url={follower.html_url}
              followers={follower.followers}
            />
            
          ))}
        </div>
    
      </div>
    );
}
}
export default User;