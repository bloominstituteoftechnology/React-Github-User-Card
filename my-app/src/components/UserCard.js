import React from 'react';
import { Card, Image, Button } from 'react-bootstrap';

function UserCard(props) {
 
  
    return (
      <div className="userCards">
        <Card>
            <Image src={props.img} rounded/>
            <div>

                <Card.Text><h2>{props.login}</h2></Card.Text>
                <Card.Text>{props.followers}</Card.Text>
                <Card.Text>{props.location}</Card.Text>
                <Button href={props.html_url}>Github</Button>
            </div>
        </Card>
      </div>
    );
}
  
export default UserCard;