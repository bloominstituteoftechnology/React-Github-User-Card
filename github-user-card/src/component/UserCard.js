import React from 'react';


function UserCard (props) {
    return(
        <div>
            <h3>{props.dataSet.login} </h3>
            <p>{props.dataSet.name}</p>
        </div>
    );
};

export default UserCard