import React from "react"

const Users = ({user, follower}) =>{
    return(
        <div>
        <div>
        <img src={user.avatar_url} alt="image of myself" />
        </div>

        {follower.map((item, i) => (
            <div>
            <img src={item.avatar_url} alt="followers images" />
            </div>
        ))}
    </div>
    )
}

export default Users;
