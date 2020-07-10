import React from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import lambdalogo from '../compnents/lambdalogo.png';

const User = props => {


    return (
        <Card>
            <CardImg src={lambdalogo} alt='' />
            <CardBody>
                <CardTitle>
                    Jenni Vest
                    </CardTitle>
                <CardSubtitle>
                    JenVest2020
                    </CardSubtitle>
                <CardText style={{ margin: '0' }}>
                    Location: DeSoto, MO
                    </CardText>
                <CardLink>
                    Profile: https://github.com/JenVest2020
                    </CardLink>
                <CardText>
                    Followers: 1
                    </CardText>
                <CardText>
                    Following: 0
                    </CardText>
                <CardText>
                    Bio: Student @Lambda School
                    </CardText>
            </CardBody>
        </Card>
    )
};

export default User;