import React from 'react'
import UserCard from './UserCard';

import '../UserList.css';


const UserList = props => {
    const { users } = props;
    console.log(users)
    return (
        <div className="card-container">
            {users.map((user) => {
                return(
                    <div key={user.id}>
                        <UserCard user={user} />
                    </div>
                )
            })}
        </div>
    )
}

export default UserList

