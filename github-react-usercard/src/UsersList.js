import React from 'react';
import UserCard from './UserCard';

class UsersList extends React.Component{
    constructor(){
        super();
        this.state = {
            users:[],
            repos: [],
            followers: [],
            following: [],
            userRepo:[]
        };
    }
    componentDidMount(){
        fetch("https://api.github.com/users/anatulea")
        .then(res => res.json())
        .then(res => {
            console.log("res", res)
            this.setState({...this.state, users:res});
       
        fetch(res.url)
        .then(res => res.json())
        .then(reposData =>{
            console.log("reposData : my user data with all the info", reposData)
            this.setState({
                repos:reposData})
        });

        fetch(res.followers_url)
        .then(res => res.json())
        .then(followerData => {
          console.log("My Followers:an array of followeres ", followerData);
            this.setState({
              followers: followerData})
        });


        fetch("https://api.github.com/users/anatulea/following")
        .then(res => res.json())
        .then(followingData => {
          console.log("who i follow? ", followingData);
            this.setState({
                following: followingData})
        });
        fetch("https://api.github.com/users/anatulea/repos")
        .then(res =>res.json())
        .then(userRepos => {
            console.log("userRepositories", userRepos )
            this.setState({
                userRepo: userRepos})
        })
    })
        .catch(err => console.log(err));
    }
    render(){
        return(
            <div>
                <UserCard 
                 data={this.state.users} 
                 reposData={this.state.repos}
                 followerData={this.state.followers}
                 followingData={this.state.following}
                 userRepos={this.state.userRepo}
                 />
          </div>
        )
    }
}
export default UsersList