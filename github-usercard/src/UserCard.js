import React from 'react';
import './App.css';
import axios from 'axios';
import UserName from './UserName';

class UserCard extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            id: [], 
            followers: []
        }
    }

handleChange = (e) => {
    this.setState({
        name: e.target.value
    })
}

componentDidMount() { 
    // this.fetchUserId()
    this.followersArray()
}

componentDidUpdate(prevProps, prevState) {
    if(prevState.name !== this.state.name) {

        this.setState({
            id: []
        })
    }
}

followersArray = () => {
    axios.get('https://api.github.com/users/spettigrew/followers')
    .then(result => {
        this.setState({
            followers: result.data
        })
    })
    .catch(e => {
        console.log('error', e)
    })
}

render() {
    return(
        <>
        {this.state.followers.map((item, index) => (
            <UserName item={item} key={index} />
        ))} 
        </>
    )
 }
}

export default UserCard;