import React from 'react';

const Card = props => {

    return (
        <div>
            {props.users.map(user => (
                <div key={user.id}>
                    <img src={user.avatur_url} alt={user.name} />
                        <p>{user.name}</p>
                        <p>{user.login}</p>
                        <p>{user.location}</p>
                </div>
            ))}
        </div>
    )
}

export default Card;