import React from 'react';
import { Card, Icon, Image, CardHeader } from 'semantic-ui-react'


const UserCard = props => {
    console.log(props)
    return (
        <Card>
            <Image src={props.user.avatar_url}/>
            <Card.Content>
                <CardHeader>{props.user.login}</CardHeader>
            </Card.Content>
        </Card>
    )
}

export default UserCard
