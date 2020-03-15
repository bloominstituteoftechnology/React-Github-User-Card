// Package imports
import React from 'react'
import axios from 'axios'
import { Card, Icon, Header } from 'semantic-ui-react'

// File imports

// Component imports


function Followers({ followers }) {

    return (
        <div>
            <hr />
            <Header as="h3">My Followers:</Header>
            <Card.Group centered itemsPerRow={6}>
                {followers.map(item => {
                    return (
                        <Card
                            key={item.id}
                            image={item.avatar_url}
                            header={`Username: ${item.login}`}
                            meta={`Type: ${item.type}`}
                            description={(
                                <span>
                                    <hr />
                                    <p>
                                        [<a target="_blank" rel="noopener noreferrer" href={item.html_url}>Profile</a>] -
                                        [<a target="_blank" rel="noopener noreferrer" href={item.repos_url}>Repos</a>] -
                                        [<a target="_blank" rel="noopener noreferrer" href={item.gists_url}>Gists</a>]
                                    </p>
                                </span>
                            )}
                            extra={(
                                <span>
                                    <Icon name="user" /> <a target="_blank" rel="noopener noreferrer" href="/followers">
                                        {`View Followers (${item.length})`}
                                    </a>
                                </span>
                            )}
                        />
                    )
                })
                }
            </Card.Group>
        </div>
    )
}

export default Followers