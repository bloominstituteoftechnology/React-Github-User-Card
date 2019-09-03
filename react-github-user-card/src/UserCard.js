import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            {
                props.followers.map(item => {
                return (
                    <div className="follower-card">
                        <div>
                            <img 
                            src={item.avatar_url}
                            className="avatar-img" />
                        </div>

                        <div className="follower-deets">
                        <h2>{item.login}</h2>
                        <p>Link to Profile: </p> {item.url}
                        </div>

                    </div>
                )}
            )}
        </div>
    )
}


export default UserCard;