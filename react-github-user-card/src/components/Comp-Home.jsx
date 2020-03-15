// Package imports
import React from 'react'
import axios from 'axios'

// Component imports
import Card from './Comp-Card'


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            ghUserData: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/JasonNeale/following')
            .then(res => {
                this.setState({ghUserData: res.data})
            })
            .catch(err => console.error(err))
    }

    render() {
        
        return (
            <div>
                {this.state.ghUserData.map(item => {
                    return <Card key={item.id} data={item} />
                })}
            </div>
        )
    }
}

export default Home