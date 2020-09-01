import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import UserCard from './components/UserCard';
import FollowersCard from './components/Followers';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            followers: []
        };
    }
    componentDidMount() {
        console.log('didMount Running');
        axios.get('https://api.github.com/users/MatthewKolmorgen')
        .then(res => {
            console.log(res.data)
            this.setState({user: res.data})
        })
        .catch(error => {
            console.log('error')
        })
        axios.get('https://api.github.com/users/MatthewKolmorgen/followers')
        .then(res => {
            this.setState({foloowers: res.data})
            console.log(this.state.followers)
        })
        .catch(error => {
            console.log('error')
        })
    }

    render(){
        return (
            <div className='App'>
                <h1>GitHub User Card</h1>
                <UserCard user={this.state.user} />
                <FollowersCard followers={this.state.followers} />
            </div>
        );
    }

}

export default App;