import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const User = props => {
    console.log('from User.js', props);

    return (
        <Card>
            <CardImg src={props.userInfo.avatar_url} alt='' />
            <CardBody>
                <CardTitle>
                    {props.userInfo.name}
                </CardTitle>
                <CardSubtitle>
                    {props.userInfo.login}
                </CardSubtitle>
                <CardText style={{ margin: '0' }}>
                    {props.userInfo.location}
                </CardText>
                <CardLink href='https://github.com/JenVest2020'>
                    Profile: {props.userInfo.html_url}
                </CardLink>
                <CardText>
                    Followers: {props.userInfo.followers}
                </CardText>
                <CardText>
                    Following: {props.userInfo.following}
                </CardText>
                {props.userInfo.bio === null ? (
                    <CardText>Bio: None</CardText>
                ) : (
                        <CardText>
                            Bio: {props.userInfo.bio}
                        </CardText>
                    )}
            </CardBody>
        </Card>
    )
};

export default User;