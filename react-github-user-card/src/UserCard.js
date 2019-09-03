import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            {
                props.followers.map(item => {
                return (
                    <div>
                    {item.login}
                    </div>
                )}
            )}
        </div>
    )
}


export default UserCard;