import React, { Component } from 'react'
import axios from 'axios'


export default class API extends Component {

    state= {
        userCards:[]
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/SamSin369')
        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => {
            debugger
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
