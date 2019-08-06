import React from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Card, Image } from 'semantic-ui-react'
import CardContent from './CardContent'
const CardOne = props => {
    console.log(props)
    return (<Segment raised>
        <Card>
            <Image src={props.data.avatar_url} />
            <Card.Content>
                <Card.Header>
                    {props.data.login}
                </Card.Header>
                <Card.Meta>{props.data.html_url}</Card.Meta>
                <Card.Meta>Location: {props.data.location}</Card.Meta>
                <Card.Meta>Following: {props.data.following}</Card.Meta>
                <Card.Description>Created at: {props.data.created_at}</Card.Description>
                <h4>Followers:</h4>
                <CardContent />
            </Card.Content>
        </Card>
    </Segment>)
}


export default CardOne;