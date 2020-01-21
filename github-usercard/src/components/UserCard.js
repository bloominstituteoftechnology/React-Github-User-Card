import React from 'react';

class UserCard extends React.Component {
    

    constructor() {
        super();
        this.state = {
            userFollowers: []
        }
    }

    componentDidMount() {
        console.log("component did mount");
        fetch('https://api.github.com/users/dustinmyers/followers')
            .then(res => res.json())
            .then(result => { console.log(result); this.setState({ userFollowers: result }) })
            .catch(err => console.log('Error fetching followers.', err));
    }

    render() {
        return (
            <div className="userCard">
                {console.log("User", this.props.user)}
                <div className="user">
                    <img src={this.props.user.avatar_url}></img>
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.location}</p>
                </div>
                <div className="followers">
                    <h2>Followers:</h2>
                    
                    {this.state.userFollowers.map((item) => <p>{item.login}</p>)}
                </div>
            </div>
        );
    }
}

export default UserCard;