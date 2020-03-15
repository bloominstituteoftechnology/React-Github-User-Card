// Package imports
import React from 'react'
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'

// File imports

// Component imports


class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            ghUserData: [],
            ghUserDataFollowers: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/JasonNeale')
            .then(res => {
                this.setState({ ghUserData: res.data })
                
                axios
                    .get('https://api.github.com/users/JasonNeale/followers')
                    .then(res => {
                        this.setState({ ghUserDataFollowers: res.data})
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }

    render() {
        
        return (
            <div>
                <Card.Group centered itemsPerRow={4}>
                    <Card
                        key={this.state.ghUserData.id}
                        image={this.state.ghUserData.avatar_url}
                        header={`Username: ${this.state.ghUserData.login}`}
                        meta={`Type: ${this.state.ghUserData.type}`}
                        description={(
                            <span>
                                <hr />
                                <p>
                                    [<a target="_blank" href={this.state.ghUserData.html_url}>Profile</a>] - 
                                    [<a target="_blank" href={this.state.ghUserData.repos_url}>Repos</a>] -  
                                    [<a target="_blank" href={this.state.ghUserData.gists_url}>Gists</a>]
                                </p>
                            </span>
                        )}
                        extra={(
                            <span>
                                <Icon name="user" /> <a target="_blank" href={this.state.ghUserData.following_url}>
                                    {`View Followers (${this.state.ghUserDataFollowers.length})`}
                                </a>
                            </span>
                        )}
                    />
                </Card.Group>
            </div>
        )
    }
}

export default Home