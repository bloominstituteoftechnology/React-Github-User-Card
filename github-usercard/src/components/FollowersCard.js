import React from 'react';
import axios from 'axios';

import { Icon } from 'semantic-ui-react';

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
            <div className="card-container">
                {this.state.followers.map(follower => {
                    return (
                        <div className="followers-card">
                            <div className="followerImg-container">
                                <img key={follower.id} src={follower.avatar_url} alt={follower.login} className="followerImg" />
                            </div>
                            <div className='cardInfo'>
                                <h3>{follower.login}</h3>
                                <p className="followerLogin">
                                <Icon name='chain' size='small' color='violet' />: 
                                    <a href={follower.html_url}>{follower.html_url}</a>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FollowersCard;