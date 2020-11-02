import React from "react"

const Users = ({user}) =>{
    return(
        <img src={user.avatar_url} />
    )
}

export default Users;