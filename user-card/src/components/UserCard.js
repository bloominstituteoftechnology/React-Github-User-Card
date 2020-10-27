import React from 'react';
import axios from 'axios';
import Search from './Search'

class UserCard extends React.Component {
    constructor(){
        super();
        this.state = {
            cardArr:[],
            userCard:{}
        }
    }

    componentDidMount() {
        this.fetchUserCard('seth-bradshaw')
    }

    fetchUserCard = (user) => {
        axios.get(`https://api.github.com/users/${user}`)
            .then((res) =>{
                this.setState({
                    userCard: res.data,
                })
                this.setState({
                    cardArr:[...this.state.cardArr, this.state.userCard],
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
        
    render(){
        return (
            <div>
                <Search fetchUser={this.fetchUserCard} />
                <div className='ParentCardDiv'>
                {this.state.cardArr.map((item) => {
                    return (
                    
                        <div className='UserCard'>
                            <h3>{item.login}</h3>
                            <img src={item.avatar_url} alt={`${item.login}'s profile picture`} />
                            <div className='cardLinks'>
                                <span>{`Followers: ${item.followers} `}</span>
                                <span>{`Following: ${item.following} `}</span>
                                <span><a href={'https://github.com/seth-bradshaw?tab=repositories'}>{`Projects`}</a></span>
                            </div>
                        </div>
                    
                    )
                })}
                </div>
            </div>
        )
    }
}
export default UserCard