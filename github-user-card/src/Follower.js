import React from 'react';
import './App.css';

class Follower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: '?',
            following: '?',
            location: '?',
            bio: '?'
        }
    }
    componentDidMount() {
        fetch(this.props.follower.url)
            .then(res => res.json())
                .then(data => this.setState({followers: data.followers, following: data.following, location: data.location, bio: data.bio}))
    }
    render() {
        return (
            <div className='follower-container'>
                <div><img src={this.props.follower.avatar_url}/></div>
                <p>Username: {this.props.follower.login}</p>
                <p>Profile: <a href={this.props.follower.url}>{this.props.follower.url}</a></p>
                <p>Followers: {this.state.followers}</p>
                <p>Following: {this.state.following}</p>
                <p>Location: {this.state.location ? this.state.location : 'None'}</p>
                <p>Bio: {this.state.bio ? this.state.bio : 'None'}</p>
            </div>
        );
    }
}

export default Follower;