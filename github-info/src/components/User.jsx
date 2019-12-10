import React from 'react'

function User({username}) {
    const {avatar_url,name } = username
    return (
        <div>
            <img src={avatar_url} alt="profile" /> <br />
            Username : {name}
        </div>
    )
}

export default User
