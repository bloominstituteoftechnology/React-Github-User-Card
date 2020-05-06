import React from "react";
import styled from 'styled-components';

//card container syling
const CardContainer = styled.div`


box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
max-width: 300px;
margin: auto;
text-align: center;
font-family: arial;
margin-top:40px;
display:flex;
flex-direction: column;

.login {
  color: grey;
  font-size: 18px;
}

.following{
    font-size: 18px;    
}

.followers{
    font-size: 18px;
    padding-bottom: 7px;
}

.user-type{
    border: none;
    outline: 0;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    width: 95%;    
    font-size: 18px;
}

`


export default class Usercard extends React.Component{
    //render my git hub user data in the card
    render(){

        return(
            <CardContainer>                
                <img width="100%" src={this.props.userData.avatar_url} />
                <h1>{this.props.userData.name}</h1>                
                <p className="login">Handle: {this.props.userData.login}</p>                
                <p className="following">Following: {this.props.userData.following}</p>
                <p className="followers">Followers: {this.props.userData.followers}</p>
                <h1 className="user-type">Github User</h1>
            </CardContainer>
        )


    }
}