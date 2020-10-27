import React from 'react';
import axios from 'axios';

class UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            userCard:[]
        }
    }

    componentDidMount() {
        this.fetchUserCard('seth-bradshaw')
    }

    fetchUserCard = (user) => {
        axios.get(`https://api.github.com/users/${user}`)
            .then((res) =>{
                this.setState({
                    userCard: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
        
    render(){
        return (
            <div className='UserCard'>
                <h3>{this.state.userCard.login}</h3>
                <img src={this.state.userCard.avatar_url} alt={`${this.state.userCard.login}'s profile picture`} />
                <div>
                    <span>{`Followers: ${this.state.userCard.followers} `}</span>
                    <span>{`Following: ${this.state.userCard.following} `}</span>
                    <span><a href={'https://github.com/seth-bradshaw?tab=repositories'}>{`Projects`}</a></span>
                </div>
            </div>
        )
    }
}
export default UserCard