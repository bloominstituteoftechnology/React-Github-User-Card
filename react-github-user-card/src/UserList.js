import React from 'react';
import UserCard from './UserCard';

const UserList = (props) => {
    return (
    <>
        <div className="user-card">
            <div>
                <img 
                src={props.users.avatar_url}
                className="avatar-img" />
            </div>

            <div className="user-deets">
            <h2>{props.users.login}</h2>
            <p>Link to Profile: </p> {props.users.url}
            </div>

        </div>

        <div>
            <UserCard followers={props.followers}/>
        </div>
    </>
    )
}


export default UserList;