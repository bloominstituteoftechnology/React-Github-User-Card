import React from "react";
import styled from 'styled-components';

//card container syling
const CardContainer = styled.div`

box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
width: 90%;
margin: auto;
text-align: center;
font-family: arial;
margin-bottom:50px;

display:flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;



.login {
  color: grey;
  font-size: 18px;
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


//render the followers data
export default class FollowerCard extends React.Component{

    render(){

        return(
            <CardContainer>
            
                {this.props.followers.map(follower =>
                    <div>
                        <img width="150px" src={follower.avatar_url} />
                        <p className="login">{follower.login}</p>
                                                                                               
                    </div>
                    
                )}
            
            </CardContainer>
        )


    }
}