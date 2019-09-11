import React, { Component } from 'react'
import axios from 'axios';

import './UserCard.css';

const BASE_URL = 'user-card_'

export default class UserCard extends Component {

    state = {
        avatar:'',
        bio: '',
        followers: 0,
        following: 0,
        hireable: false,
        location: '',
        name: '',
        publicGists: 0,
        publicRepos: 0,
    }

    componentDidMount = () => {
        axios.get(`https://api.github.com/users/matthiasbakken`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    avatar: res.data.avatar_url,
                    bio: res.data.bio,
                    website: res.data.blog,
                    followers: res.data.followers,
                    following: res.data.following,
                    hireable: res.data.hireable,
                    location: res.data.location,
                    name: res.data.name,
                    publicGists: res.data.public_gists,
                    publicRepos: res.data.public_repos,
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    render() {
        const { avatar, bio, followers, following, hireable,
            location, name, publicGists, publicRepos } = this.state;

        return (
            <div className={`${BASE_URL}container`}>
                <img src={avatar} className={`${BASE_URL}avatar`} alt='avatar' />
                <p className={`${BASE_URL}name`} >{name}</p>
                <p className={`${BASE_URL}bio`} >{`Bio: ${bio}`}</p>
                <p className={`${BASE_URL}location`} >{location}</p>
                <p className={`${BASE_URL}hireable`} >{hireable ? `Open to new opportunities!` : `Currently happily employed!`}</p>
                <p className={`${BASE_URL}repos`} >
                    {`Public Repos: ${publicRepos}`} - {`Public Gists: ${publicGists}`}
                </p>
                <p className={`${BASE_URL}followers`} >{`Followers: ${followers} - Following: ${following}`}</p>
                <p className={`${BASE_URL}url`} ><a href='https://github.com/MatthiasBakken' target='_blank' >https://github.com/MatthiasBakken</a></p>
            </div>
        )
    }
}
