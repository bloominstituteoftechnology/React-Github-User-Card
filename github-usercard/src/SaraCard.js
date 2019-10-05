import React from 'react';
import './App.css';
import axios from 'axios';

class SaraCard extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            avatar_url: "",
            bio: ""
        }
    }

    componentDidMount() {
        this.fetchUser()
    }

    fetchUser = () => {
        axios.get('https://api.github.com/users/spettigrew')
            .then(result => {
                this.setState({
                    name: result.data.name, avatar_url: result.data.avatar_url
                })
            })
            .catch(e => {
                console.log('error', e)
            })
    }

    render() {
        return (
            <div>
                <h2>My Own Github</h2>
                <p>{this.state.name}</p>
            <img src={this.state.avatar_url} alt="Profile Pic" />
            </div>
        )
    }
}

export default SaraCard;