import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

export default class User extends React.Component{
    state = {
        followers: []
    }
    
    componentDidMOunt() {
        axios.get("https://api.github.com/users/AesonJohnson/followers")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return(

        )
    }
}