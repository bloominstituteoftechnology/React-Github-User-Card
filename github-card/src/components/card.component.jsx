import React from 'react'

const Card = (props) => {
    console.log('card', props.data)
    return (
        <div key={props.data.id}>
            <div>
                <h1>{props.data.login}</h1>
                <img src={props.data.avatar_url} alt="avatar" />
                <a href={props.data.html_url}>Profile</a>
            </div>
        </div>
    )
}

export default Card
