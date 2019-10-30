import React from 'react'

function FollowersList(props){
    return(
        <div>
            {props.user.map(person=>(
                <div key={person.id}>
                    <h3>{person.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default FollowersList