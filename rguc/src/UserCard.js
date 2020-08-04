import React from 'react'
import styled from 'styled-components'

const CenterDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

const Card = styled.div`
text-align:center;
border: 2px solid black;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:35%;
margin:10px;
padding:5px;

`
const Portrait = styled.img`
max-width:100%;
height:auto;
width:30%;
border-radius:50%;

`

class UserCard extends React.Component {
 

    render(){
        return(
            <CenterDiv>
                <Card>
                <h2>{this.props.user.login}</h2>
                <Portrait src={this.props.user.avatar_url}/>
                <p>{this.props.user.location}</p>
                <p>{this.props.user.bio}</p>
                </Card>
            </CenterDiv>
        )
    }
}

export default UserCard;