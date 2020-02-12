import React from 'react';

const MyProfile = (props) => {

    return(
        <div><h1>Inside </h1>
        {console.log('inside the Profile return -->', props.users.login)}
        <h2>{props.users.login}</h2>

        </div>
    )
}

export default MyProfile