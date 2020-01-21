import React from 'react';
import "../App.css";
import { Col, Avatar, Button, Icon } from 'antd';
import GitHubCalendar from 'react-github-calendar';

const FollowersCard = (props) => {
 
  
    return (
      
        <section>
        
            <Col id='figure' span={8}>
                
                <Avatar shape='square' size={200}
                width={110}
                height={120}
                src={props.img}/> 

                <h2>{props.login}</h2>
                
                <GitHubCalendar id="secbg" color="hsl(203, 82%, 33%)" username={props.login}/>

                <Button value="large" href={props.html_url}><Icon type="github" /></Button>
                
            </Col>
                
  
        </section>
     
    );
}
  
export default FollowersCard;