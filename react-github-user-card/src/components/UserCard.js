import React from "react";

export default class Usercard extends React.Component{

    render(){

        return(
            <div>
                <img width="200" src={this.props.userData.avatar_url} />
                <p>Login: {this.props.userData.login}</p>
                <p>Name: {this.props.userData.name}</p>
                <p>Following: {this.props.userData.following}</p>
                <p>Followers: {this.props.userData.followers}</p>
                
            </div>
        )


    }
}