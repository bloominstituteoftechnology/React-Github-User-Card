import React from 'react';


const UserCard = props => {
    const { userData } = props
    console.log('The component is working.')
    console.log("This is the userData", userData)
    return (
        <div>
            <h1>THIS IS THE USER CARD</h1>
            <p>THIS IS THE USER CARD</p>
            <h1>{userData.login}</h1>
        </div>
    )
}

export default UserCard;