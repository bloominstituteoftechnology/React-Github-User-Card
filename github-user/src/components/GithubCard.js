import React from 'react';
import GithubList from './GithubList'
import {Card, Row, CardGroup} from 'react-bootstrap'
import styled from 'styled-components'
import '../App.css'


const Image = styled.image`
width: 30%;
align-self: center;


`;
const CardWidth = styled.div`
width: 25%;
text-align: center;



`;

class GithubCard extends React.Component {
  render() {
     return(
       
        
        <CardWidth>
        <Card>
         <Image> <Card.Img src={this.props.followers.avatar_url}/></Image>
           <Card.Title>{this.props.followers.login}</Card.Title> 
          <Card.Link href={this.props.followers.html_url}>GitHub Link</Card.Link>
         </Card>
       </CardWidth>
        
    
       
     );
  }

}


export default GithubCard;