import React, { Component } from 'react'
import Axios from 'axios'

import FriendsCard from './friendsCard.component'
import UserCard from './userCard.component'

class CardContainer extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            followers: []
        }
    }

    componentDidMount() {
        const url = 'https://api.github.com/users/kyleswillard'
        Axios.get(url).then((response) => {
            this.setState({ data: response.data })
            this.getfollowers(response.data)
        })
    }
    async getfollowers(data) {
        Axios.get(data.followers_url).then((followers) => {
            console.log('getfollowers', followers)
            let newFollowers = []
            followers.data.forEach((f) => {
                newFollowers.push(f)
            })
            this.setState({ followers: newFollowers })
        })
    }

    render() {
        console.log('card component render', this.state)
        return (
            <div>
                <UserCard data={this.state.data} />
                <FriendsCard followers={this.state.followers} />
            </div>
        )
    }
}

export default CardContainer
