import React from "react";

export default class UserCard extends React.Component {
    
    render(){
        return(
            <div>
                <img src={this.props.userData.avatar_url}/>
                <p>Login: {this.props.userData.login}</p>
                <p>URL: {this.props.userData.url}</p>
                <p>Bio: {this.props.userData.bio}</p>
                <p>Followers: {this.props.userData.followers}</p>
                <p>Following: {this.props.userData.following}</p>
            </div>
        )
    }
}