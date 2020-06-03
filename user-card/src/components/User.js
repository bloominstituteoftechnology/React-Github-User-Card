import React, { Component } from 'react';

 class User extends Component {
     
     
     
    render(props) {
        const { username, image, repos, followers  } = this.props
    return (
    <div className="card">
        <h1><b>{username}</b></h1>
        <img src={image} alt="Avatar"  />
        <div className="container">
            
            <h3>I have {repos} public repos, 4 organizations & {followers} followers </h3>
        </div>
    </div>
        )
    }
}

export default User
