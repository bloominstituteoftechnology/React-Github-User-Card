import React from "react"

const FollowersCard = props => {
    console.log('please do something', props)
    return (
        <div>
            <img src={props.img} alt={props.login} />
        </div>
    )
}

export default FollowersCard