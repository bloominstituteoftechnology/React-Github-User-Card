import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red
    width: auto;
`
const CardTitle = styled.p`
    font-size; 20px;
`

const CardImg = styled.img`
    width: 100px;

`


const UserCard = props => {
    // console.log('Im a stupid prop that doesnt work!', props)
    return(
        <Card>
            <CardTitle>{props.login}</CardTitle>
            <CardImg src = {props.avatar} alt="" />
        </Card>
    )
}

export default UserCard