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

class Followers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            follower: []
        }
    }

    render(){
        return(
            <div>
                <CenterDiv> <h2>Followers:</h2></CenterDiv>
                  
 <CenterDiv>
 
     {this.props.followers.map(follower =>
                <Card>
                <h2>{follower.login}</h2>
                <Portrait src={follower.avatar_url}/>
                <p>{follower.location}</p>
                <p>{follower.bio}</p>
                </Card>
    )}
            </CenterDiv>
            </div>
        )
    }
}

export default Followers;