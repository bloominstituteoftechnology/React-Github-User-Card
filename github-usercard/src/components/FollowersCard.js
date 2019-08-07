import React from 'react';
import axios from 'axios';

class FollowersCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: []
        }
        console.log(props)
    }
    //life cycle method
    componentDidMount() {
        this.fetchFollowers();
    }

    //https://api.github.com/users/jadeli1720/followers
    fetchFollowers = () => {
        axios
            .get(`https://api.github.com/users/jadeli1720/followers`)
            .then(res => {
                this.setState({ followers: res.data })
            })
            .catch(err => console.log('Sorry, the API is currently down', err))
    }

    render() {
        return (
            <div>
                {this.state.followers.map(follower => {
                    return (
                        <div className="card">
                            <img key={follower.id} src={follower.avatar_url} alt={follower.name} />
                            <div className='cardInfo'>
                                <h3>{follower.name}</h3>
                                <h4>{follower.login}</h4>
                                <p>Location: {follower.location}</p>
                                <p>Profile: {follower.html_url}</p>
                                <p> Bio: {follower.bio}</p>
                            </div>
                            <div className="user-cardFooter">
                                <p>Followers: {follower.followers}</p>
                                <p>Following: {follower.following}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FollowersCard;