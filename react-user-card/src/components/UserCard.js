import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function UserCard(props) {
    return (
        <Card>
            <Image src={props.user.avatar_url} alt="user's avatar" />
            <Card.Header>{props.user.name}</Card.Header>
            <Card.Content>
                <a href={props.user.html_url}>{props.user.login}</a>
                <Card.Meta>Location: {props.user.location}</Card.Meta>
                <Card.Description>Respositories: {props.user.public_repos}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default UserCard;