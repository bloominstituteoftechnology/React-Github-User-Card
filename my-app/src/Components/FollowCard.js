import React from "react"

const FollowingCard = ({following, img, bio}) => {
    return (
        <div>
            <img src={img} alt='User Jarrod Follows' />
            <p>Name: {following}</p>
            <p>Bio: {bio}</p>
        </div>
    )
}

export default FollowingCard