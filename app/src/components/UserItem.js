import React, { Component } from 'react'
import axios from 'axios'

class UserItem extends Component {

    async componentDidMount(){
        this.setState({loading: true});
    
        const followers = await axios.get(`${this.props.user.followers_url}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        this.setState({followers: followers.data, loading: false});
    
    }   
    
    render() {
        const { login, avatar_url, html_url} = this.props.user;
        console.log(followers);// const { login, avatar_url } = this.props.followers;
        return (
            <div className='card text-center'>
                <img
                src={avatar_url}
                alt=''
                className='round-img'
                style={{width: '60px'}} />
                <h3>{login}</h3>
                <div>{this.props.followers}</div>


                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>
                        Info
                    </a>
                </div>
            </div>
        )
    }
}

export default UserItem;