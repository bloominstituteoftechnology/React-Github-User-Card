import React from 'react';
import axios from 'axios';

class Card extends React.Component {
    state = {
        data: [],
        followersData: [],
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/briabytes')
        .then((res) => {
            console.log(res)
            this.setState({
                data: res.data
            });
        })
        .catch((err) => {
            console.log(err)
        });
        axios
        .get('https://api.github.com/users/briabytes/followers')
        .then((res) => {
            console.log(res)
            this.setState({
                followersData: res.data
            });
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.data.avatar_url} alt='Github avatar' />
                <h2>Username: {this.state.data.login} </h2>
                <p>Public Repositories: {this.state.data.public_repos} </p>
                <p>Following: {this.state.data.following} </p>
                <p>Followers: {this.state.data.followers} </p>
            </div>
        )
    }
}

export default Card;