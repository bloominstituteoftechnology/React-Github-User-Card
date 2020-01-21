import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default class User extends React.Component{
    constructor() {
        super();
        this.state = {
            user: {},
            followers: []
        }
    }

    componentDidMOunt() {
        axios.get("https://api.github.com/users/AesonJohnson/")
        .then(response => {
            console.log(response)
            this.setState({
                user: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
        
        axios.get("https://api.github.com/users/AesonJohnson/followers")
        .then(response => {
            console.log(response)
            this.setState({
                followers: response.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <UserCard
                    avatar_url={this.state.user.avatar_url}
                    id={this.state.user.id}
                    login={this.state.user.login}
                    html_url={this.state.user.html_url}
                />

                <UserCard
                    avatar_url={this.state.user.avatar_url}
                    id={this.state.user.id}
                    login={this.state.user.login}
                    html_url={this.state.user.html_url}
                />
            </div>
        )
    }
}