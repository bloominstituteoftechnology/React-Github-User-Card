import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    width: 20rem;
`

const Name = styled.h2``

const Avatar = styled.img`
    width: 10rem;
`

const Followers = styled.p``

const Following = styled.p``

const Location = styled.p``

const Bio = styled.p``

const Card = (props) => {

    const user = props.props

    console.log(user)

    return (
        <Wrapper>
            <Name>{user.name}</Name>
            <Avatar src={user.avatar_url} />
            <Followers>{user.followers} followers</Followers>
            <Following>Following {user.following} users</Following>
            <Location>Located in {user.location}</Location>
            <Bio>Bio: {user.bio}</Bio>
        </Wrapper>
    )
}

export default Card