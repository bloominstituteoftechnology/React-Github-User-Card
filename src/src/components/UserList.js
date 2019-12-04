import React from 'react'
import UserCard from "./UserCard";

const UserList = p => {
    console.log(p)

    return (
        <div>
            <UserCard
                id={p.users.id}
                name={p.users.name}
                location={p.users.location}
                imgUrl={p.users.avatar_url}
                followers={p.users.followers}

                />
        </div>
    )
}

export default UserList