import React from 'react';
import {  Card, CardImg, CardBody } from 'reactstrap';

const Followers = props => {
        return (
            <div>
              <Card>
                <CardImg src={props.img} alt='Head Shot' />
                <CardBody>{props.follower.login}</CardBody>
               </Card>   
            </div>
        )
    };

export default Followers;




