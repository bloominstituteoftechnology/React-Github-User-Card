import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    constructor(props) {
        super(props)
            this.state = {
                isMapShowing: false
            }
    }

    clickHandler = () => {
        this.setState({
            isMapShowing: !this.state.isMapShowing
        })
    }


render() {
    const user = this.props.user
    const followers = this.props.followers
    
    return (
        <li className="UserDetails" key={user.id} id={user.id}>
          <h3>{user.login}</h3>
          <p><strong>Name: </strong>{user.name}</p>
          <p><strong>Bio: </strong>{user.bio}</p>
          <p><strong>Twitter: </strong>{user.twitter_username}</p>
        </li>

        <li className="FollowerDetails" key={followers.id} id={followers.id}>
        <h3>{followers.login}</h3>
        <p><strong>Name: </strong>{followers.name}</p>
        <p><strong>Bio: </strong>{followers.bio}</p>
        <p><strong>Twitter: </strong>{followers.twitter_username}</p>
        </li>
    );
}

}
export default User;