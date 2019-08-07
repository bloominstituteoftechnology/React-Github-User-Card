import React from 'react';
import axios from 'axios';

class FollowersCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
    }

    //https://api.github.com/users/jadeli1720/followers
    fetchFollowers = () => {
        axios
        .get(``)
        .then(res => {
            this.setState({users: res.data})
        })
        .catch(err => console.log('Sorry, the API is currently down', err))
    }

    render() {
        return(
            <div>
                This is from the FollowersCard.js
            </div>
        )
    }
}

export default FollowersCard;