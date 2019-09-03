import React from 'react';
import { List } from "semantic-ui-react";

function FollowersList(props) {
    return (
        <div className='followers'>
            <h3>followers:</h3>
            <List as = 'ul'>
                {props.followers.map(follower => {
                    return (
                        <List.Item as='li' key={follower.login}>
                            {follower.login}
                            </List.Item>
                    )
                })}
            </List>
        </div>
    )
}