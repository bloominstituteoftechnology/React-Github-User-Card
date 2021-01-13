import axios from 'axios';
import React from 'react';
import './card.css';


class Card extends React.Component {
    state ={
        followers:[]
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/kmcervan/followers')
        .then((res) => {
            console.log(res.data);
            this.setState({
                followers: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className='followers'>
                <h2>Your Followers</h2>
                {this.state.followers.map(user=>(
                    <div key={user.id} className='follower'>
                        <img className='follower-img' src={user.avatar_url} alt={user.name}/>
                        <div className='followers-content'>
                            <h3>{user.login}</h3>
                            <p>{user.html_url}</p>
                            <p>{user.type}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        )
    }
}
export default Card;