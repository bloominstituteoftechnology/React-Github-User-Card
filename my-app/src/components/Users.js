import React from "react"

const Users = ({user, follower}) =>{
    return(
        <div>
        <div>
        <img src={user.avatar_url} alt="image of me" />
        </div>

        {follower.map((item, i) => (
            <div>
            <img src={item.avatar_url} alt="follower images" />
            </div>
        ))}
    </div>
    )
}

export default Users;