import React from 'react';
import Card from 'react-bootstrap/card';

const UserCard =(props)=>{
    console.log(props)
    return(
        // <div key={props.id}>
        //     <h3>{props.name}</h3>
        //     <h3>{props.login}</h3>
        //     <p>{props.email}</p>
        //     <img src={props.avatar} alt={props.name}/>
        // </div>
      
        <Card style={{ width: '18rem' }} key={props.id}>
            <Card.Img variant="top" src={props.avatar} alt={props.name} />
            <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Title>{props.login}</Card.Title>
            <Card.Text>{props.email}</Card.Text>
            </Card.Body>
        </Card>
      
    );
}
export default UserCard;