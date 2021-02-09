import React from 'react';
import axios from 'axios';
import FriendCards from './FriendCards';

class GitHubCard extends React.Component{
    constructor(){
        super();
        this.state={
            friendsData: {}
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/paulstgermain/followers')
        .then(res => {
            this.setState({friendsData: res.data})
        })
    }

    render(){
        return(
            <div>
                <h1>Name Here: {this.props.gitData.name}</h1>
                <FriendCards friends={this.state.friendsData} />
            </div>
        )
    }
}

export default GitHubCard;