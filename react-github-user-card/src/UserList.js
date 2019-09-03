import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    return (
    <>
        <div>
            
            <p>{props.users.login}</p>
            
        </div>
        <div>
            <UserCard followers={props.followers}/>
        </div>
    </>
    )
}


export default UserList;