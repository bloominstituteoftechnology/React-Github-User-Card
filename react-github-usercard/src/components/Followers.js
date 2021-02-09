import axios from 'axios'
import React, { Component } from 'react'

export class Followers extends Component {
    state = {
        followers: []
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/Stone98/followers')
            .then((res) => {
                this.setState({
                    followers: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                {this.state.followers.map(follower => (
                    <div className="card" key={follower.id}>
                        <img src={follower.avatar_url} alt={follower.login} />
                        <div className="card-info">
                            <p className="username">{follower.login}</p>
                            <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}

export default Followers
