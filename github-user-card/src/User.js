import React from 'react';
import './App.css';

class User extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        fetch(this.props.user.followers_url)
            .then(res => res.json())
                .then(data => this.props.updateFollowers(data));
    }
    render() {
        return (
            <div className='user-container'>
                <div><img src={this.props.user.avatar_url}/></div>
                <p>Username: {this.props.user.login}</p>
                <p>Profile: <a href={this.props.user.url}>{this.props.user.url}</a></p>
                <p>Name: {this.props.user.name ? this.props.user.name : "None"}</p>
                <p>Company: {this.props.user.company ? this.props.user.company : "None"}</p>
                <p>Location: {this.props.user.location ? this.props.user.location : "None"}</p>
                <p>Email: {this.props.user.email ? this.props.user.email : "None"}</p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
            </div>
        );
    }
}

export default User;