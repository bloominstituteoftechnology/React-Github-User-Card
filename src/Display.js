import React from 'react';

const Display = (props) =>{
    
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.login}</p>
            <p>{props.email}</p>
            <img src = {props.avatar} />
        </div>
    );
}

export default Display;