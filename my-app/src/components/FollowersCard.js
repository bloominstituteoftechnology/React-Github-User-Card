import React from 'react';
import { Button, Figure } from 'react-bootstrap';


const FollowersCard = (props) => {
 
  
    return (
      <div>
        <Figure>

            <Figure.Image 
                width={110}
                height={120}
                src={props.img} roundedCircle/>
            <div>
            
                <Figure.Caption><h4>{props.login}</h4></Figure.Caption>
                <Figure.Caption>{props.followers}</Figure.Caption>
                <Button href={props.html_url}>Github</Button>
            </div>
            
        </Figure>
      </div>
    );
}
  
export default FollowersCard;