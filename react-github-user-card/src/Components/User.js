import React from 'react';


function User(props){
    console.log('from user component', props)
    return(
        <div>   
                <div key={Date.now()} className='user'>
                    <img src={props.user.avatar_url} alt={props.user.login}/>
                    <div>
                        <h3>{props.user.login}</h3>
                    </div>
                </div>
        </div>
    )
}

export default User;