import React from 'react';
import { Component } from 'react';

import styled from 'styled-components';

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

      const Container = styled.div`
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         background: lightgreen;
         color: white;
      `;

      const Followers = styled.div`
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
      `;


      const Card = styled.div`
         width: 45%;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin: 10px 0 10px 0;
         border: 2px solid white;
         background: lightgrey;
      `;


      const Image = styled.img`
         width: 200px;
         height: 200px;
     `;

      return (
         <Container className='App'>
            <h1>My Github UserCard</h1>
            <Card className='usercard'>
			      <h3>{this.state.users.name}</h3>
			      <div className='img-container'>
				      <Image src={this.state.users.avatar_url} alt={this.state.users.avatar_url} key={this.state.users.avatar_url} />
			      </div>
			      <div className='user-data'>
                  <p>username: {this.state.users.login}</p>
                  <p>id: {this.state.users.id}</p>
                  <p>url: <a href={this.state.users.html_url}>{this.state.users.html_url}</a></p>
                  <p># of repos: {this.state.users.public_repos}</p>
                  <p># of followers: {this.state.users.followers}</p>
                  <p># following: {this.state.users.following}</p>
			      </div>
		      </Card>
            <Followers className='followers'>
               <h2>My Github Followers</h2>
               {this.state.followers.map(follower => (
                  <Card className='follower' key={follower.id}>
                     <div className='img-container'>
                        <Image src={follower.avatar_url} alt={follower.avatar_url} key={follower.avatar_url} />
                     </div>
                     <div className='user-data'>
                        <p>username: {follower.login}</p>
                        <p>id: {follower.id}</p>
                        <p>url: <a href={follower.html_url}>{follower.html_url}</a></p>
                     </div>
                  </Card>
               ))}
            </Followers>
         </Container>
      )
   }
}

export default App;