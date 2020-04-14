import React from 'react';
import { Component } from 'react';

import './App.css';

class App extends Component {
   constructor() {
      super();
      this.state = {
         users: [],
         followers: []
      };
   }

   componentDidMount() {
      console.log('Component did mount!');

      fetch(`https://api.github.com/users/lela23`)
         .then(results => results.json())
         .then(users => {
            console.log('users: ', users);
            this.setState({ users: users });
         })
         .catch(err => {
            console.log('Error: ', err)
         });

      fetch(`https://api.github.com/users/lela23/followers`)
         .then(results => results.json())
         .then(follows => {
            console.log('followers: ', follows);
            this.setState({ followers: follows });
         })
         .catch(err => {
            console.log('Errors: ', err)
         });
   }

   render() {

      return (
         <div className='App'>
            <h1>Github UserCard</h1>
            <div className='usercard'>
			      <h2>{this.state.users.name}</h2>
			      <div className='img-container'>
				      <img src={this.state.users.avatar_url} alt={this.state.users.avatar_url} key={this.state.users.avatar_url} />
			      </div>
			      <div className='user-data'>
                  <p>username: {this.state.users.login}</p>
                  <p>id: {this.state.users.id}</p>
                  <p>url: <a href={this.state.users.html_url}>{this.state.users.html_url}</a></p>
                  <p># of repos: {this.state.users.public_repos}</p>
                  <p># of followers: {this.state.users.followers}</p>
                  <p># following: {this.state.users.following}</p>
			      </div>
		      </div>
            <div className='followers-container'>
               <h2>Followers</h2>
               <div className='followers'>
                  {this.state.followers.map(follower => (
                     <div className='follower' key={follower.id}>
                        <div className='img-container'>
                           <img src={follower.avatar_url} alt={follower.avatar_url} key={follower.avatar_url} />
                        </div>
                        <div className='user-data'>
                           <p>username: {follower.login}</p>
                           <p>id: {follower.id}</p>
                           <p>url: <a href={follower.html_url}>{follower.html_url}</a></p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      )
   }
}

export default App;