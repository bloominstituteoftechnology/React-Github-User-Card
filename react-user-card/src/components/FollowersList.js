import React from 'react';
import { List, Image, Card } from "semantic-ui-react";

function FollowersList(props) {
    return (
        <div className='followers'>
            <h3>followers:</h3>
            <Card>
            <List as = 'ul'>
                {props.followers.map(follower => {
                    return (
                        <List.Item as='li' key={follower.login}>
                        <Image src={follower.avatar_url} alt="user's avatar" />
                        {follower.avart_url}
                        <div>
                        {follower.login}
                        </div>
                        </List.Item>
                    )
                })}
            </List>
            </Card>
        </div>
    )
}

export default FollowersList;