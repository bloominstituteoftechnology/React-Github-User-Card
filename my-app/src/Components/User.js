import React from 'react';
import axios from "axios";

class User extends React.Component{
    state={
        name: []
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/jarrod847`)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    img: res.data.avatar_url,
                    bio: res.data.bio
                })
            })
            .catch (error => console.log(error))
    }
    render(){
        return (
            <div>
                
            </div>
        )
    }
}