import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import './App.css';


class App extends React.Component {
    state = {
        userData: [],
        followersList:[],
        username: 'haase1020',
        followersData: [],
        user: '',
    };

componentDidMount(){
axios
    .get(`https://api.github.com/users/${this.state.username}`)
    .then(res => {
console.log("original username response", res)
this.setState({
    userData: [res.data],
    user: res.data.name
});
console.log("user data", this.state.userData)
    })
    .catch(err => console.log("You have an error", err));

axios
.get(`https://api.github.com/users/haase1020/followers`) 
.then(res => {
    console.log("follower response", res)
    this.setState({
        followersList: res.data
    });
    console.log("follower list", this.state.followersList)
    this.state.followersList.map(follower => {
        console.log("login response", follower.login)

        axios
        .get(`https://api.github.com/users/${follower.login}`)
        .then(res => {
            console.log("follower login response", res)
            this.setState({
                followersData: [...this.state.followersData, res.data]
            })
            console.log("ollowers data", this.state.followersData)
        })
        .catch(err => console.log("you have an error", err));
    })
})
.catch(err => console.log("you have an error", err));
console.log("followers data again", this.state.followersData)   
}  

render() {
    return(
        <div className="App">
            <h1>GitHub Buddies {this.state.user}</h1>
            <UserCard followers= {this.state.followersData} userData={this.state.userData} user={this.state.user} />
        </div>
    );
}
}
export default App;