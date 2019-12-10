import React from 'react';


const Followers = props => {
        return (
            <div>
                <p>{props.follower.login}</p>
                <img src={props.img} alt='Head Shot' />
            </div>
        )
    };

export default Followers;