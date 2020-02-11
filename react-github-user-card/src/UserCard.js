import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red
`


const UserCard = props => {
    // console.log('Im a stupid prop that doesnt work!', props)
    return(
        <Card>
            {/* <p>{props.name}</p> */}
            <p>{props.login}</p>
            {/* <p>{props.location}</p> */}
            <img src = {props.avatar} alt=""/>
            
        </Card>
    )
}

export default UserCard