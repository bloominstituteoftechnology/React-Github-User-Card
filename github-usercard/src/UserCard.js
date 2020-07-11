import React from 'react'
import {Card, CardTitle, CardSubtitle,Col, CardImg, Row} from 'reactstrap'

function UserCard (props) {
    return(
        <>
        <Col sm={{ size: 'auto', offset: 3 }}>
        <Card>
            <Row>
                <Col>
            <CardImg style={{width:'200px'}} src={props.user.avatar_url}></CardImg>                
                </Col>
                <Col>
            <CardTitle>Username: {props.user.login}</CardTitle>
            <CardSubtitle>Human Name: {props.user.name}</CardSubtitle>
            <CardSubtitle> Bio: {props.user.bio}</CardSubtitle>                
                </Col>
            </Row>
        </Card>
        </Col>

        <Col sm={{ size: 'auto', offset: 4 }}>
            <h1>{props.user.login}'s followers</h1>            
        </Col>
        <Row>
            {props.followers.map(item=> 
                <Col sm= '4'>
                    <ul>
                        <li>
                            <a href={item.html_url}> 
                                <p>{item.login}</p>
                            </a>
                        </li>               
                    </ul>
                </Col>)}
        </Row>
        </>
    )
}

export default UserCard