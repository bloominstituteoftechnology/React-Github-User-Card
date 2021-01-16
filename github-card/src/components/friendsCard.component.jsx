import React from 'react'
import Card from 'react-bootstrap/Card'
const FriendsCard = (props) => {
    return (
        <>
            {props.followers.map((follower) => {
                return (
                    <div className="card-container" key={follower.id}>
                        <Card>
                            <Card.Img variant="top" src={follower.avatar_url} />
                            <Card.Title>{follower.login}</Card.Title>
                            <Card.Link href={follower.html_url}>
                                Profile
                            </Card.Link>
                        </Card>
                    </div>
                )
            })}
        </>
    )
}

export default FriendsCard
