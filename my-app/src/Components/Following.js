import React from 'react';
import axios from 'axios';
import FollowingCard from './FollowCard'


class Following extends React.Component {
    state ={
        following: []
    }

    componentDidMount(){
        axios
            .get(`https://api.github.com/users/jarrod847/following`)
            .then(res =>{
                console.log("Following", res.data);
                this.setState({
                    following: res.data
                })
            })
            .catch(error => console.log(error))
    }
    render(){
        return (
            <div>
                {this.state.following.map (following => (
                <FollowingCard key={following.id}
                    img={following.avatar_url} 
                    following = {following.login}
                    bio = {following.bio} 
                    />
                ))}
            </div>
        )
    }
}

export default Following