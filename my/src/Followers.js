import React from 'react';


const Followers = props => {
        return (
            <div>
                <img src={props.img} alt='Head Shot' />
                <p>{props.follower.login}</p>
                
            </div>
        )
    };

export default Followers;